import { Document, DocumentDetail, Transaction } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { C100AsJson } from "./C100totext";
import { Decimal } from "@prisma/client/runtime"; // Import Decimal
import { Business2Json } from "./generator";
import { DocumentJson } from "src/types";
import fs from "fs";

export async function Json2OpenFormat(businessID: string, prisma: PrismaService) {
  const BigJson = await Business2Json(businessID, prisma);
  let result = { formattedString: "", INIdata: "" };

  if (BigJson) {
    let formattedString = "";

    for (const records of BigJson.allJsonArrays) {
      // console.log(record);
      let line = "";
      for (const record of records) {
        for (const field of record) {
          line += formatField(field.value, field.Type, field.Length);
        }
        line += "\r\n";
      }
      formattedString += line; // Use '\n' for line breaks
    }
    // console.log(BigJson.ini);
    // fs.writeFileSync("output.txt", formattedString); // Writing to a file
    let INIdata = await formatINIFile(BigJson.ini);
    result.formattedString = formattedString;
    result.INIdata = INIdata;
  }
  return result;
}

export async function formatINIFile(data: any) {
  let formattedString = "";
  for (const records of data) {
    let line = "";
    for (const record of records) {
      //   for (const field of record) {
      line += formatField(record.value, record.Type, record.Length);
    }
    line += "\r\n";

    formattedString += line; // Use '\n' for line breaks
    //   line += "\r\n";
  }
  // }
  return formattedString;
  // fs.writeFileSync("output.txt", formattedString); // Writing to a file
  // console.log(formattedString);
}

// Function to format fields based on their type and length
export function formatField(value: any, Type: string, Length: number): string | undefined {
  switch (Type) {
    case "Str":
      // return String(value).padStart(Length, " ");
      return String(value).substring(0, Length).padStart(Length, " ");
      break;
    case "Num":
      return String(value).substring(0, Length).padStart(Length, "0");
      break;

    case "NumData":
      let numValue = Math.round(value * 100); // Round to nearest integer, assuming you need 2 decimal places
      let sign = numValue >= 0 ? "+" : "-"; // Determine sign (positive numbers get a '+', negative numbers get a '-')
      let absoluteValue = Math.abs(numValue); // Remove sign for padding
      let paddedValue = String(absoluteValue).padStart(Length - 1, "0"); // Length - 1 because one position is for the sign
      return sign + paddedValue;
      break;

    case "Date":
      return formatDate(value);
      break;
    case "Time":
      return formatTime(value);
      break;
    default:
      return;
  }
}

function formatDate(dateString: string): string {
  // console.log("Attempting to format date:", dateString); // Debug log

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    console.error("Invalid date string:", dateString); // Debug log
    return "";
  }

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
}

// Helper function to format Time
function formatTime(time: Date): string {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return `${hours}${minutes}`;
}

// Function to calculate the total and VAT amount for a document
export async function calculateDocumentBalances(document: Document | null, prisma: PrismaService) {
  let TotalbeforeDiscount = 0;
  let Totaldiscount = 0;
  let TotalVATAmount = 0;
  let TotalDocumentWithVATAmount = 0;

  if (!document) {
    return { TotalbeforeDiscount, Totaldiscount, TotalVATAmount, TotalDocumentWithVATAmount };
  }

  const documentDetails = await prisma.documentDetail.findMany({
    where: { documentId: document.id },
  });

  if (documentDetails) {
    // return { TotalbeforeDiscount, Totaldiscount, TotalVATAmount, TotalDocumentWithVATAmount };

    for (const detail of documentDetails) {
      const { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount } = calculateTransactionDetails(detail);
      TotalbeforeDiscount += TotalAmountWithoutVat + discount;
      Totaldiscount += discount;
      TotalVATAmount += VATAmount;
      TotalDocumentWithVATAmount += VATAmount + TotalAmountWithoutVat;
    }
  }
  if (document.documentType != 320) {
    const ReceiptDetail = await prisma.receiptDetail.findMany({
      where: { documentId: document.id },
    });
    if (ReceiptDetail) {
      for (const receipt of ReceiptDetail) {
        let amount: number = Number(receipt.total) || 0;
        TotalDocumentWithVATAmount += amount;
      }
    }
  }
  return { TotalbeforeDiscount, Totaldiscount, TotalVATAmount, TotalDocumentWithVATAmount };

  // console.error("Failed to update the related Document balance", error);
  // return { TotalbeforeDiscount: 0, Totaldiscount: 0, TotalVATAmount: 0, TotalDocumentWithVATAmount: 0 };
}

// Function to fetch documents for a specific business
export async function getDocumentsForBusiness(businessId: string, prisma: PrismaService) {
  try {
    return await prisma.document.findMany({
      where: { businessId },
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

// Function to get customer data
export async function fetchCustomer(customerID: string | undefined, prisma: PrismaService) {
  return await prisma.clientsAndSupplier.findUnique({ where: { id: customerID || "123" } });
}

export async function calculateTransactionSum(accountId: string, prisma: PrismaService): Promise<{ totalDebit: Decimal; totalCredit: Decimal }> {
  const transactions: Transaction[] = await prisma.transaction.findMany({
    where: {
      accountInTransactionId: accountId,
    },
  });

  let totalDebit = new Decimal(0);
  let totalCredit = new Decimal(0);

  transactions.forEach((transaction) => {
    if (transaction.actionIndicator === 1 && transaction.actionAmount) {
      totalDebit = totalDebit.add(new Decimal(transaction.actionAmount));
    } else if (transaction.actionIndicator === 2 && transaction.actionAmount) {
      totalCredit = totalCredit.add(new Decimal(transaction.actionAmount));
    }
  });

  return { totalDebit, totalCredit };
}

export async function calculateDocumentDetails(documentDetail: DocumentDetail) {
  const quantity: number = documentDetail.quantity || 0;
  const pricePerUnit: number = Number(documentDetail.priceWithoutVat) || 0; // Note the change here
  const amount = quantity * pricePerUnit;
  const VatRate = documentDetail.vatRate || 0;
  const VATAmount = VatRate * amount;
  return {};
}
