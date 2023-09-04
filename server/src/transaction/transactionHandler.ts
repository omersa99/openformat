import { PrismaService } from "../prisma/prisma.service";
import { Document, DocumentDetail } from "@prisma/client";
import { handleType300 } from "./transactionsHandlers/handleType300";
import { handleTyp305to345 } from "./transactionsHandlers/handleTyp305to345";
import { handleReceiptTransaction } from "./handleReceiptTransaction";

export async function handleTransactionBasedOnDocumentType(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  // let customerAccount;

  //   try {
  //     const customer = await prisma.clientsAndSupplier.findUnique({
  //       where: { id: document.clientSupplierId || "0" },
  //     });

  //     customerAccount = await prisma.account.findFirst({
  //       where: { clientsAndSuppliersId: customer?.id || "0" },
  //     });

  //     if (!customerAccount) {
  //       console.log("Could not find customer account");
  //       return;
  //     }
  //   } catch (err) {
  //     console.log("Error finding customer account:", err);
  //     return;
  //   }
  try {
    switch (document.documentType) {
      case 300:
        handleType300(document, prisma, documentDetail);
        break;
      case 305 || 310 || 330 || 340 || 345:
        handleTyp305to345(document, prisma, documentDetail);
        break;

        //   let quantity = documentDetail.quantity || 0;
        //   let pricePerUnit = documentDetail.priceWithoutVat || 0;
        //   let amount = quantity * pricePerUnit;

        //   await prisma.transaction.create({
        //     data: {
        //       actionIndicator: 1,
        //       actionAmount: amount,
        //       accountInTransaction: {
        //         connect: {
        //           id: customerAccount.id,
        //         },
        //       },
        //     },
        //   });
        //   const payableAccount = await prisma.account.findFirst({ where: { accountKey: "50001" } });
        //   await prisma.transaction.create({
        //     data: {
        //       actionIndicator: 2,
        //       actionAmount: amount,
        //       accountInTransaction: {
        //         connect: {
        //           id: payableAccount?.id,
        //         },
        //       },
        //     },
        //   });

        break;
    }
  } catch (error) {
    console.log("Error in handleTransactionBasedOnDocumentType:", error);
  }
}

export function calculateTransactionDetails(documentDetail: DocumentDetail) {
  const quantity = documentDetail.quantity || 0;
  const pricePerUnit = documentDetail.priceWithoutVat || 0;
  const amount = quantity * pricePerUnit;
  const VatRate = documentDetail.vatRate || 0;

  return { quantity, pricePerUnit, amount, VatRate };
}
