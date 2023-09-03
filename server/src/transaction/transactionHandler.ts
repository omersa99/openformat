import { PrismaService } from "../prisma/prisma.service";
import { Document, DocumentDetail } from "@prisma/client";

export async function handleTransactionBasedOnDocumentType(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
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

  switch (document.documentType) {
    case 300:
      let quantity = documentDetail.quantity || 0;
      let pricePerUnit = documentDetail.priceWithoutVat || 0;
      let amount = quantity * pricePerUnit;
      await prisma.transaction.create({
        data: {
          actionIndicator: 1,
          actionAmount: amount,
          accountInTransaction: {
            connect: {
              id: customerAccount.id,
            },
          },
        },
      });
      //   break;
      // case 2:
      //   await prisma.transaction.create({
      //     data: {
      //       // Fill in your transaction data here
      //       actionOperation: "Another Operation",
      //       transactionType: "Type 2",
      //     },
      //   });
      break;
  }
}
