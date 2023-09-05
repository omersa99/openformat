import { C100Fields } from "./C100";

export function parseC100(line: String) {
  let currentIndex = 0;
  const parsedData: { [key: string]: any } = {};
  for (const field of C100Fields) {
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
    documentType: Number(parsedData["Document Type"]),
    documentNumber: Number(parsedData["Document Number"]),
    // documentProductionDate: Number(parsedData["Document Production Date"]),
    // documentDate: Number(parsedData["Document Date"]),
    canceledDocument: parsedData["Canceled Document"] || false,
    // ... (other fields mapping)
  };
}
