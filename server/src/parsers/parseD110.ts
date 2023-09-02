import { EnumDocumentDetailTransactionType } from "@prisma/client";
import { D110Fields } from "./D110";

export function parseD110(line: String) {
  let currentIndex = 0;
  const parsedData: { [key: string]: any } = {};
  for (const field of D110Fields) {
    const { Length, Translation } = field;
    const value = line.substr(currentIndex, Length).trim();

    // Convert to respective data type based on the Field 'Type'
    switch (field.Type) {
      case "Num":
        parsedData[Translation] = parseInt(value, 10);
        break;
      case "Str":
        parsedData[Translation] = value;
        break;
      default:
        parsedData[Translation] = value;
        break;
    }

    currentIndex += Length;
  }
  return parsedData;
}

export function mapToDocumentModel(parsedData: { [x: string]: any }) {
  return {
    // businessId: String(parsedData["Authorized Business Number"]),
    priceWithoutVat: Number(parsedData["Unit Price without VAT"]),
    transactionType: String(parsedData["Transaction Type"]) as EnumDocumentDetailTransactionType,
    documentProductionDate: Number(parsedData["Document Production Date"]),
    documentDate: Number(parsedData["Document Date"]),
    canceledDocument: parsedData["Canceled Document"] || false,
    // ... (other fields mapping)
  };
}
