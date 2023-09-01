import { B110Fields } from "./B110";

export function parseB110(line: String) {
  let currentIndex = 0;
  const parsedData: { [key: string]: any } = {};
  for (const field of B110Fields) {
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

export function mapToAccountModel(parsedData: { [x: string]: any }) {
  return {
    accountantClassificationCode: parsedData["Accountant Classification Code"],
    accountBalanceAtStartOfSegment: parsedData["Account Balance at Start of Segment"],
    accountBalanceInForeignCurrency: parsedData["Account Balance in Foreign Currency"],
    accountKey: parsedData["Account Key"],
    accountName: parsedData["Account Name"],
    centerAccount: parsedData["Center Account"],
    currencyCodeForForeignCurrency: parsedData["Currency Code for Foreign Currency"],
    examinedBalanceCode: parsedData["Examined Balance Code"],
    examinedBalanceCodeDescription: parsedData["Examined Balance Code Description"],
    totalCredit: parsedData["Total Credit"],
    totalDebit: parsedData["Total Debit"],
    // clientsAndSuppliersId: parsedData["Supplier/Customer Business Number"],
    // branchBranchIdentifier: parsedData["Branch/Branch Identifier"],
    // createdAt: parsedData["Created At"], // Adjust the field name as needed
    // updatedAt: parsedData["Updated At"], // Adjust the field name as needed
  };
}
