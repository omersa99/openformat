import { Account, Transaction } from "@prisma/client";
import { B110Fields } from "src/parsers/B110";
import { PrismaService } from "src/prisma/prisma.service";
import { FieldDefinition, FieldInfo } from "src/types";
import { calculateTransactionSum } from "./main";

export async function AccountToJson(account: Account, prisma: PrismaService, generalCounter: number) {
  const accountFields: FieldDefinition[] = B110Fields; // Assuming B110Fields is imported

  const { totalDebit, totalCredit } = await calculateTransactionSum(account.id, prisma);

  const newAccountFields: FieldInfo[] = accountFields.map((field) => {
    let value: string | number | null = "";

    switch (field.Field_Id) {
      case 1400:
        value = "B110";
        break;
      case 1401:
        value = generalCounter;
        break;
      case 1402:
        value = account.businessId;
        break;
      case 1403:
        value = account.accountKey || "";
        break;
      case 1404:
        value = account.accountName || "";
        break;
      case 1405:
        value = account.examinedBalanceCode || "";
        break;
      case 1406:
        value = account.examinedBalanceCodeDescription || "";
        break;
      // Handle other cases...
      case 1421:
        value = account.centerAccount || "";
        break;
      case 1422:
        value = account.accountBalanceAtStartOfSegment || "";
        break;
      case 1423:
        value = account.currencyCodeForForeignCurrency || "";
        break;
      // ... Handle other cases ...
      case 1414:
        value = account.accountBalanceAtStartOfSegment || "";
        break;
      case 1415:
        value = totalDebit !== undefined ? totalDebit.toString() : "";
        break;
      case 1416:
        value = totalCredit !== undefined ? totalCredit.toString() : "";
        break;
      case 1417:
        value = account.accountantClassificationCode || "";
        break;
      case 1419:
        // value = account.clientsAndSuppliersId || "";
        value = "";
        break;
      // ... Handle other cases ...
      default:
        break;
    }

    return {
      ...field,
      value: value,
    };
  });

  return newAccountFields;
}
