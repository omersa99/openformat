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
  } catch (error) {
    console.log("Error in handleTransactionBasedOnDocumentType:", error);
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
}
