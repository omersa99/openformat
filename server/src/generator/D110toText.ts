import { Document, DocumentDetail } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { D110Fields } from "src/parsers/D110";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { DocumentJson, FieldDefinition, FieldInfo } from "src/types";

export async function D110ToJson(document: Document, documentDetail: DocumentDetail, prisma: PrismaService, generalCounter: number, internalCounter: number) {
  const DtailsFields: FieldDefinition[] = D110Fields;

  let item = await prisma.item.findUnique({ where: { id: documentDetail.itemId || "123" } });
  const { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount } = calculateTransactionDetails(documentDetail);

  let itemData: {
    InternalItemCode: any;
    quantity?: number;
    PricewithoutVAT?: number | Decimal;
    ManufacturerName?: string;
    ManufacturerSerialNumber?: string;
    MeasurementUnit?: string;
    sortingCodeDescription?: string;
  };
  if (item) {
    itemData = {
      quantity: documentDetail.quantity || 1,
      PricewithoutVAT: documentDetail.priceWithoutVat || 0,
      InternalItemCode: item.internalItemCode || "",
      ManufacturerName: item.supplierManufacturerCodeInProcurement || "",
      ManufacturerSerialNumber: "1234",
      MeasurementUnit: item.unitOfMeasurementDescription || "",
      sortingCodeDescription: item.sortingCodeDescription || "abc",
    };
  } else {
    itemData = {
      quantity: documentDetail.quantity || 1,
      PricewithoutVAT: documentDetail.priceWithoutVat || 0,
      InternalItemCode: "",
      ManufacturerName: "",
      ManufacturerSerialNumber: "",
      MeasurementUnit: "",
      sortingCodeDescription: "abc",
    };
  }

  const newDetails = DtailsFields.map((field) => {
    let value;
    switch (field.Field_Id) {
      case 1250:
        value = "D110";
        break;
      case 1251:
        value = generalCounter;
        break;
      case 1252:
        value = "123456789"; // need to change this
        break;
      case 1253:
        value = document.documentType;
        break;
      case 1254:
        value = document.documentNumber;
        break;
      case 1255:
        value = internalCounter;
        break;
      case 1256:
        value = document.documentType;
        break;
      case 1257:
        value = document.linkedDocumentIds || "";
        break;
      case 1258:
        value = documentDetail.transactionType;
        break;
      case 1259:
        value = itemData.InternalItemCode;
        break;
      case 1260:
        value = item?.sortingCodeDescription;
        break;
      case 1261:
        value = itemData.ManufacturerName;
        break;
      case 1262:
        value = itemData.ManufacturerSerialNumber;
        break;
      case 1263:
        value = itemData.MeasurementUnit;
        break;
      case 1264:
        value = quantity ? quantity * 100 : 0;
        break;
      case 1265:
        value = pricePerUnit || 0;
        break;
      case 1266:
        value = discount ? -discount : 0;
        break;
      case 1267:
        value = TotalAmountWithoutVat + discount;
        break;
      case 1268:
        value = VatRate || 0;
        break;

      case 1270:
        value = "1";
        break;

      case 1272:
        value = document.createdAt;
        break;
      case 1273:
        value = "";
        break;
      case 1274:
        value = "";
        break;
      case 1275:
        value = "";
        break;
    }
    return {
      ...field,
      value: value, // the value computed in the switch statement
    };
  });
  return newDetails;
}
