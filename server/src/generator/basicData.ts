import { generateRandomNumber } from "src/clientsAndSupplier/clientsAndSupplier.service";
import { A100Fields } from "src/parsers/A100";
import { Z900Fields } from "src/parsers/Z900";
import { PrismaService } from "src/prisma/prisma.service";
import { FieldDefinition, FieldInfo } from "src/types";

export async function A100AsJson(generalCounter: number, ProccessIdentifier: string) {
  const A100Details: FieldDefinition[] = A100Fields;

  const newDetails: FieldInfo[] = A100Details.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1100:
        value = "A100";
        break;
      case 1101:
        value = generalCounter;
        break;
      case 1102:
        value = "";
        break;
      case 1103:
        value = ProccessIdentifier;
        break;
      case 1104:
        value = "&OF1.31&";
        break;
      case 1105:
        value = "";
        break;
    }
    return {
      ...field,
      value: value,
    };
  });

  return newDetails;
}

export async function Z100AsJson(generalCounter: number, ProccessIdentifier: string) {
  const Z900Details: FieldDefinition[] = Z900Fields;

  const newDetails: FieldInfo[] = Z900Details.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1150:
        value = "Z900";
        break;
      case 1151:
        value = generalCounter;
        break;
      case 1152:
        value = "";
        break;
      case 1153:
        value = ProccessIdentifier;
        break;
      case 1154:
        value = "&OF1.31&";
        break;
      case 1155:
        value = generalCounter;
        break;
      case 1156:
        value = "";
        break;
    }
    return {
      ...field,
      value: value,
    };
  });

  return newDetails;
}
