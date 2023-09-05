import { Document, Item, DocumentDetail } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { calculateItemIncomeAndOutcome } from "src/item/itemHandler";
// import { Item } from "src/item/base/Item";
import { M100Fields } from "src/parsers/M100";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { FieldDefinition } from "src/types";

export async function M100ToJson(item: Item, prisma: PrismaService, generalCounter: number) {
  const itemFields: FieldDefinition[] = M100Fields;

  const incomeAndOutcome = await calculateItemIncomeAndOutcome(item.id, prisma);
  if (!incomeAndOutcome) {
    console.log("Error calculating item income and outcome");
    return;
  }
  const { totalInflows, totalOutflows } = incomeAndOutcome;

  const newItems = itemFields.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1450:
        value = "M100";
        break;
      case 1451:
        value = generalCounter;
        break;
      case 1452:
        value = "";
        break;
      case 1453:
        value = item.universalItemCode;
        break;
      case 1454:
        value = item.supplierManufacturerCodeInProcurement;
        break;
      case 1455:
        value = item.internalItemCode;
        break;
      case 1456:
        value = item.itemName;
        break;
      case 1457:
        value = item.sortingCode;
        break;
      case 1458:
        value = item.sortingCodeDescription;
        break;
      case 1459:
        value = item.unitOfMeasurementDescription;
        break;

      case 1460:
        value = item.openingBalance;
        break;

      case 1461:
        value = totalInflows || 0;
        break;
      case 1462:
        value = totalOutflows || 0;
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
  return newItems;
}
