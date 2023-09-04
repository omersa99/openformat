import { ReceiptDetail, Document } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

export async function handleReceiptTransaction(document: Document, prisma: PrismaService, receiptDetail: ReceiptDetail) {
  let customerAccount;
  try {
    customerAccount = await prisma.account.findFirst({
      where: { clientsAndSuppliersId: document.clientSupplierId || "0" },
    });
    if (!customerAccount) {
      console.log("Could not find customer account");
      return;
    }
  } catch (err) {
    console.log("Error in handleTransactionBasedOnDocumentType:", err);
    return;
  }

  await prisma.transaction.create({
    data: {
      actionIndicator: 2,
      actionAmount: receiptDetail.total,
      accountInTransaction: {
        connect: {
          id: customerAccount.id,
        },
      },
      receiptDetail: {
        connect: {
          id: receiptDetail.id,
        },
      },
    },
  });

  let payableAccountKey;
  switch (receiptDetail.paymentType) {
    case 1:
      payableAccountKey = "31001";
      break;
    case 2:
      payableAccountKey = "31002";
      break;
    default:
      payableAccountKey = "31001";
  }

  try {
    const payableAccount = await prisma.account.findFirst({
      where: {
        accountKey: payableAccountKey,
      },
    });

    if (!payableAccount) {
      console.log("could not find payable account");
      return;
    }
    await prisma.transaction.create({
      data: {
        actionIndicator: 1,
        actionAmount: receiptDetail.total,
        accountInTransaction: {
          connect: {
            id: payableAccount.id,
          },
        },
        receiptDetail: {
          connect: {
            id: receiptDetail.id,
          },
        },
      },
    });
  } catch (err) {
    console.log("could not find payable account :", err);
    return;
  }
}
