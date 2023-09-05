// import { DocumentDetail, Document } from "@prisma/client";
// import { PrismaService } from "src/prisma/prisma.service";
// import { calculateTransactionDetails } from "src/transaction/transactionHandler";
// import { C100AsJson } from "./C100totext";

// export function formatField(value: any, Type: any, Length: number) {
//   let formattedValue;

//   switch (Type) {
//     case "Str":
//       formattedValue = String(value).padEnd(Length, " ");
//       break;

//     case "Num":
//       const sign = value >= 0 ? "+" : "-";
//       formattedValue =
//         Math.abs(value)
//           .toString()
//           .padStart(Length - 1, "0") + sign;
//       break;

//     case "Date":
//       const year = value.getFullYear();
//       const month = (value.getMonth() + 1).toString().padStart(2, "0");
//       const day = value.getDate().toString().padStart(2, "0");
//       formattedValue = `${year}${month}${day}`;
//       break;
//     case "Time":
//       const hours = value.getHours().toString().padStart(2, "0");
//       const minutes = value.getMinutes().toString().padStart(2, "0");
//       formattedValue = `${hours}${minutes}`;
//       break;
//     default:
//       break;
//   }

//   return formattedValue;
// }

// export async function calculateDocumentBalances(document: Document, prisma: PrismaService) {
//   let VATAmount = 0;
//   let totalWithoutVat = 0;

//   try {
//     const documentDetails = await prisma.documentDetail.findMany({
//       where: { documentId: document.id },
//     });

//     if (!documentDetails) {
//       return {
//         totalWithoutVat,
//         VATAmount,
//       };
//     }

//     for (const detail of documentDetails) {
//       const { quantity, pricePerUnit, amount, VatRate } = calculateTransactionDetails(detail);
//       totalWithoutVat += amount;
//       VATAmount += (amount * VatRate) / 100;
//     }
//     return { totalWithoutVat, VATAmount };
//   } catch (error) {
//     console.error("Failed to update the related Document balance", error);
//   }
// }

// export async function handleC100Creation(documentID: string, prisma: PrismaService) {
//   let formattedString = "";
//   let C100ModifiedFields = await C100AsJson(documentID, prisma);
//   if (C100ModifiedFields) {
//     for (const field of C100ModifiedFields) {
//       if (field.hasOwnProperty("value")) {
//         formattedString += formatField(field.value, field.Type, field.Length);
//       }
//     }

//     return formattedString;
//   }
// }

// export async function getDocumentsForBusiness(businessId: string, prisma: PrismaService) {
//   try {
//     const documents = await prisma.document.findMany({
//       where: {
//         businessId: businessId,
//       },
//     });
//     return documents;
//   } catch (error) {
//     console.error("Error fetching documents:", error);
//   }
// }
import { Document, DocumentDetail, Transaction } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { C100AsJson } from "./C100totext";
import { Decimal } from "@prisma/client/runtime"; // Import Decimal

// Function to format fields based on their type and length
export function formatField(value: any, Type: string, Length: number): string | undefined {
  switch (Type) {
    case "Str":
      return String(value).padEnd(Length, " ");
    case "Num":
      const sign = value >= 0 ? "+" : "-";
      return (
        Math.abs(value)
          .toString()
          .padStart(Length - 1, "0") + sign
      );
    case "Date":
      return formatDate(value);
    case "Time":
      return formatTime(value);
    default:
      return;
  }
}

// Helper function to format Date
function formatDate(date: Date): string {
  const year = date.getFullYear();
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
export async function calculateDocumentBalances(document: Document, prisma: PrismaService) {
  let VATAmount = 0;
  let totalWithoutVat = 0;

  try {
    const documentDetails = await prisma.documentDetail.findMany({
      where: { documentId: document.id },
    });

    if (!documentDetails) return { totalWithoutVat, VATAmount };

    for (const detail of documentDetails) {
      const { amount, VatRate } = calculateTransactionDetails(detail);
      totalWithoutVat += amount;
      VATAmount += (amount * VatRate) / 100;
    }

    return { totalWithoutVat, VATAmount };
  } catch (error) {
    console.error("Failed to update the related Document balance", error);
  }
}

// Function to handle C100 document creation
export async function handleC100Creation(documentID: string, prisma: PrismaService) {
  let formattedString = "";
  //   const C100ModifiedFields = await C100AsJson(documentID, prisma);

  //   if (!C100ModifiedFields) return;

  //   for (const field of C100ModifiedFields) {
  //     if (field.hasOwnProperty("value")) {
  //       formattedString += formatField(field.value, field.Type, field.Length) ?? "";
  //     }
  //   }

  return formattedString;
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
