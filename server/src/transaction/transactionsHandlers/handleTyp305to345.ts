import { Document, DocumentDetail } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "../transactionHandler";

export async function handleTyp305to345(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  let customerAccount;

  try {
    // const customer = await prisma.clientsAndSupplier.findUnique({
    //   where: { id: document.clientSupplierId || "0" },
    // });

    customerAccount = await prisma.account.findFirst({
      where: { clientsAndSuppliersId: document.clientSupplierId || "0" },
    });

    if (!customerAccount) {
      console.log("Could not find customer account");
      return;
    }
  } catch (err) {
    console.log("Error finding customer account:", err);
    return;
  }

  const { quantity, pricePerUnit, amount, VatRate } = calculateTransactionDetails(documentDetail);

  const actionIndicatorFirst = document.documentType === 320 ? 2 : 1;
  const actionIndicatorSecond = document.documentType === 320 ? 1 : 2;

  await prisma.transaction.create({
    data: {
      actionIndicator: actionIndicatorFirst,
      actionAmount: amount,
      accountInTransaction: {
        connect: {
          id: customerAccount.id,
        },
      },
    },
  });

  const payableAccount = await prisma.account.findFirst({ where: { accountKey: "50001" } });
  const taxAccount = await prisma.account.findFirst({ where: { accountKey: "60002" } });

  await prisma.transaction.create({
    data: {
      actionIndicator: actionIndicatorSecond,
      actionAmount: amount * (100 - VatRate),
      accountInTransaction: {
        connect: {
          id: payableAccount?.id,
        },
      },
    },
  });

  await prisma.transaction.create({
    data: {
      actionIndicator: actionIndicatorSecond,
      actionAmount: amount * VatRate,
      accountInTransaction: {
        connect: {
          id: taxAccount?.id,
        },
      },
    },
  });
}
