import { PrismaService } from "../prisma/prisma.service";
import { Document, DocumentDetail, ReceiptDetail } from "@prisma/client";
import { handleType300 } from "./transactionsHandlers/handleType300";
import { handleTyp305to345, handleTyp700, handleTyp810 } from "./transactionsHandlers/handleTyp305to345";
import { handleReceipt400, handleReceipt420 } from "./handleReceiptTransaction";

export async function handleTransactionBasedOnDocumentType(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  try {
    switch (document.documentType) {
      case 100:
      case 200:
      case 205:
      case 210:
      case 500:
      case 600:
      case 610:

      case 710:
        break;
      case 300:
        await handleType300(document, prisma, documentDetail);
        break;
      case 305:
      case 310:
      case 320:
      case 330:
      case 340:
      case 345:
        await handleTyp305to345(document, prisma, documentDetail);
        break;
      case 700:
        await handleTyp700(document, prisma, documentDetail);
        break;
      case 810:
      case 800:
      case 820:
      case 840:
      case 900:
      case 910:
        await handleTyp810(document, prisma, documentDetail);
        break;
    }
  } catch (error) {
    console.log("Error in handleTransactionBasedOnDocumentType:", error);
  }
}

export async function handleReceiptTransaction(document: Document, prisma: PrismaService, receiptDetail: ReceiptDetail) {
  try {
    switch (document.documentType) {
      case 400:
      case 405:
        await handleReceipt400(document, prisma, receiptDetail);
        break;
      case 420:
      case 410:
        await handleReceipt420(document, prisma, receiptDetail);
        break;
    }
  } catch (error) {
    console.log("Error in handleTransactionBasedOnDocumentType:", error);
  }
}

export function calculateTransactionDetails(documentDetail: DocumentDetail) {
  const quantity: number = documentDetail.quantity || 0;
  const pricePerUnit: number = Number(documentDetail.priceWithoutVat) || 0; // Note the change here
  const discount: number = Number(documentDetail.discountAmount) || 0;
  const TotalAmountWithoutVat = quantity * pricePerUnit - discount;
  const VatRate = documentDetail.vatRate || 0;
  const VATAmount = (VatRate * (quantity * pricePerUnit)) / 100;

  return { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount };
}
