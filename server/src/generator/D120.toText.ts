import { Document, DocumentDetail, ReceiptDetail } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { D120Fields } from "src/parsers/D120";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { FieldDefinition, FieldInfo } from "src/types";

export async function D120ToJson(document: Document, receiptDetails: ReceiptDetail, prisma: PrismaService, generalCounter: number, internalCounter: number) {
  const reciptFields: FieldDefinition[] = D120Fields;

  // Calculate transaction details using provided functions or modules
  //   const { amount } = calculateTransactionDetails(documentDetail);

  const newDetails: FieldInfo[] = reciptFields.map((field) => {
    let value;

    switch (field.Field_Id) {
      case 1300:
        value = "D120";
        break;
      case 1301:
        value = generalCounter;
        break;
      case 1302:
        value = document.businessId || "";
        break;
      case 1303:
        value = document.documentType || "";
        break;
      case 1304:
        value = document.documentNumber || "";
        break;
      case 1305:
        value = internalCounter || 0;
        break;
      case 1306:
        value = receiptDetails.paymentType || 0;
        break;
      case 1307:
        value = receiptDetails.bankNumber || 0;
        break;
      case 1308:
        value = receiptDetails.branchNumber || 0;
        break;
      case 1309:
        value = receiptDetails.accountNumber || "";
        break;
      case 1310:
        value = receiptDetails.checkNumber || 0;
        break;
      case 1311:
        value = receiptDetails.paymentCheckClearanceDate || document.createdAt;
        break;
      case 1312:
        value = receiptDetails.total || 0;
        break;
      case 1313:
        value = receiptDetails.payeeCompanyCode || "";
        break;
      case 1314:
        value = receiptDetails.swipedCardName || "";
        break;
      case 1315:
        value = receiptDetails.creditTransactionType || 0;
        break;
      case 1320:
        value = receiptDetails.branchIdentifier || "";
        break;
      case 1322:
        value = document.createdAt || "";
        break;
      case 1323:
        value = ""; // Handle this case accordingly
        break;
      case 1324:
        value = ""; // Handle this case accordingly
        break;
      // Handle other cases...
      default:
        break;
    }

    return {
      ...field,
      value: value,
    };
  });

  return newDetails;
}
