import { Document, DocumentDetail } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { TransactionCreateInput } from "../base/TransactionCreateInput";
import { calculateTransactionDetails } from "../transactionHandler";

export async function handleType300(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  let customerAccount;

  try {
    const customer = await prisma.clientsAndSupplier.findUnique({
      where: { id: document.clientSupplierId || "0" },
    });

    customerAccount = await prisma.account.findFirst({
      where: { clientsAndSuppliersId: customer?.id || "0" },
    });

    if (!customerAccount) {
      console.log("Could not find customer account");
      return;
    }
  } catch (err) {
    console.log("Error finding customer account:", err);
    return;
  }
  // let quantity = documentDetail.quantity || 0;
  // let pricePerUnit = documentDetail.priceWithoutVat || 0;
  // let amount = quantity * pricePerUnit;
  const { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount } = calculateTransactionDetails(documentDetail);

  await prisma.transaction.create({
    data: {
      actionIndicator: 1,
      actionAmount: TotalAmountWithoutVat + VATAmount,
      date: document.createdAt,
      portion: document.documentNumber,
      accountInTransaction: {
        connect: {
          id: customerAccount.id,
        },
      },
      documentDetail: {
        connect: {
          id: documentDetail.id,
        },
      },
    },
  });
  const payableAccount = await prisma.account.findFirst({ where: { accountKey: "50001" } });
  await prisma.transaction.create({
    data: {
      actionIndicator: 2,
      date: document.createdAt,
      portion: document.documentNumber,
      actionAmount: TotalAmountWithoutVat + VATAmount,
      accountInTransaction: {
        connect: {
          id: payableAccount?.id,
        },
      },
      documentDetail: {
        connect: {
          id: documentDetail.id,
        },
      },
    },
  });
}
