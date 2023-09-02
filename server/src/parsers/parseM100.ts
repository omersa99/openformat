import { M100Fields } from "./M100";

export function parseM100(line: String) {
  let currentIndex = 0;
  const parsedData: { [key: string]: any } = {};
  for (const field of M100Fields) {
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

export function mapToItemModel(parsedData: { [x: string]: any }) {
  return {
    // businessId: parsedData["Authorized Business Number"],
    universalItemCode: parsedData["Universal Item Code"],
    supplierManufacturerCodeInProcurement: parsedData["Supplier/Manufacturer Item Code (in Purchase Documents)"],
    internalItemCode: parsedData["Internal Item Code"],
    itemName: parsedData["Item Name"],
    sortingCode: parsedData["Sorting Code"],
    sortingCodeDescription: parsedData["Sorting Code Description"],
    unitOfMeasurementDescription: parsedData["Measurement Unit Description"],
    openingBalance: parseInt(parsedData["Item Balance at the Beginning of the Cut"], 10),
    // ... (other fields)
  };
}
