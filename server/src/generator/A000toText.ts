import { Business } from "@prisma/client";
import { A000Fields } from "src/parsers/A000";
import { A000Counter } from "src/parsers/A000Counter";
import { PrismaService } from "src/prisma/prisma.service";
import { FieldDefinition, FieldInfo } from "src/types";

export async function A000ToJson(businessNumber: number, generalCounter: number, ProccessIdentifier: String) {
  const GeneralFields: FieldDefinition[] = A000Fields;

  const newDetails: FieldInfo[] = GeneralFields.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1000:
        value = "A000";
        break;
      case 1001:
        value = "";
        break;
      case 1002:
        value = generalCounter;
        break;
      case 1003:
        value = businessNumber;
        break;
      case 1004:
        value = ProccessIdentifier;
        break;
      case 1005:
        value = "&OF1.31&";
        break;
      case 1006:
        value = "123456789";
        break;
      case 1007:
        value = "קלסר חכם";
        break;
      case 1008:
        value = "V1";
        break;
      case 1009:
        value = 516835741;
        break;
      case 1010:
        value = "קסלר";
        break;
      case 1011:
        value = 1;
        break;
      case 1012:
        value = "";
        break;
      case 1013:
        value = 2;
        break;
      case 1014:
        value = 2;
        break;
      case 1015:
        value = businessNumber;
        break;
      case 1016:
        value = "";
        break;
      case 1017:
        value = "";
        break;
      case 1018:
        value = "קסלר";
        break;
      case 1019:
        value = "";
        break;
      case 1020:
        value = "";
        break;
      case 1021:
        value = "";
        break;
      case 1022:
        value = "";
        break;
      case 1023:
        value = 2023;
        break;
      case 1024:
        value = "";
        break;
      case 1025:
        value = "";
        break;
      case 1026:
        value = "20230101";
        break;
      case 1027:
        value = "0000";
        break;
      case 1028:
        value = 0;
        break;
      case 1029:
        value = 1;
        break;
      case 1030:
        value = "zip";
        break;
      case 1032:
        value = "ILS";
        break;
      case 1034:
        value = 0;
        break;
      case 1035:
        value = "";
        break;
      default:
        // Handle default case if needed
        break;
    }

    return {
      ...field,
      value: value,
    };
  });

  return newDetails;
}

export async function CounterToJson(recordID: string, count: number) {
  const A000Counters: FieldDefinition[] = A000Counter; // Assuming B110Fields is imported

  const counters: FieldInfo[] = A000Counters.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1050:
        value = recordID;
        break;
      case 1051:
        value = count;
        break;
    }
    return {
      ...field,
      value: value,
    };
  });
  return counters;
}
