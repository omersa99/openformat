import { PrismaService } from "src/prisma/prisma.service";
import { B100Fields } from "src/parsers/B100";
import { Transaction } from "@prisma/client";
import { DocumentJson } from "src/types";

export async function TransactionToJson(
  transaction: Transaction,
  prisma: PrismaService,
  generalCounter: number,
  internalCounter: number,
  recordUniqueId: number
) {
  const transactionFields = B100Fields;

  let transactionAccount = await prisma.account.findUnique({ where: { id: transaction.accountInTransactionId || "123" } });

  const transactionJson: DocumentJson[] = transactionFields.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1350:
        value = "B100";
        break;
      case 1351:
        value = generalCounter; // Placeholder for File Record Number
        break;
      case 1352:
        value = "";
        break;
      case 1353:
        value = recordUniqueId; // Placeholder for Transaction Number
        break;
      case 1354:
        value = internalCounter; // Placeholder for Line Number in Transaction
        break;
      case 1355:
        value = transaction.portion;
        break;
      case 1356:
        value = "";
        break;
      case 1357:
        value = transaction.reference || "";
        break;
      case 1358:
        value = 0; // Placeholder for Reference Document Type
        break;
      case 1359:
        value = transaction.reference_2 || "";
        break;
      case 1360:
        value = 0; // Placeholder for Reference Document Type 2
        break;
      case 1361:
        value = ""; // Placeholder for Details
        break;
      case 1362:
        value = transaction.date || transaction.createdAt; // Format the date as needed
        break;
      case 1363:
        value = transaction.createdAt || ""; // Format the modified date as needed
        break;
      case 1364:
        value = transactionAccount?.accountKey || "";
        break;
      case 1365:
        value = transaction.counterAccount || "";
        break;
      case 1366:
        value = transaction.actionIndicator || 0;
        break;
      case 1367:
        value = ""; // Placeholder for Foreign Currency Code
        break;
      case 1368:
        value = transaction.actionAmount || 0;
        break;
      case 1369:
        value = transaction.foreignCurrencyAmount || 0;
        break;
      case 1370:
        value = ""; // Placeholder for Quantity Field
        break;
      case 1371:
        value = ""; // Placeholder for Matching Field 1
        break;
      case 1372:
        value = ""; // Placeholder for Matching Field 2
        break;
      case 1374:
        value = ""; // Placeholder for Branch/Branch Identifier
        break;
      case 1375:
        value = transaction.createdAt;
        break;
      case 1376:
        value = ""; // Placeholder for Action Operation
        break;
      case 1377:
        value = ""; // Placeholder for Future Data Area
        break;
      default:
        value = ""; // Handle default case
        break;
    }
    return {
      ...field,
      value: value,
    };
  });

  return transactionJson;
}
