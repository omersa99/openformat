import { Document, DocumentDetail } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { D110Fields } from "src/parsers/D110";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "src/transaction/transactionHandler";
import { DocumentJson, FieldDefinition, FieldInfo } from "src/types";

export async function D110ToJson(document: Document, documentDetail: DocumentDetail, prisma: PrismaService, generalCounter: number, internalCounter: number) {
  const DtailsFields: FieldDefinition[] = D110Fields;

  let item = await prisma.item.findUnique({ where: { id: documentDetail.itemId || "123" } });
  const { quantity, pricePerUnit, amount, VatRate } = calculateTransactionDetails(documentDetail);

  let itemData: {
    InternalItemCode: any;
    quantity?: number;
    PricewithoutVAT?: number | Decimal;
    ManufacturerName?: string;
    ManufacturerSerialNumber?: string;
    MeasurementUnit?: string;
  };
  if (item) {
    itemData = {
      quantity: documentDetail.quantity || 1,
      PricewithoutVAT: documentDetail.priceWithoutVat || 0,
      InternalItemCode: item.internalItemCode || "",
      ManufacturerName: item.supplierManufacturerCodeInProcurement || "",
      ManufacturerSerialNumber: "1234",
      MeasurementUnit: item.unitOfMeasurementDescription || "",
    };
  } else {
    itemData = {
      quantity: documentDetail.quantity || 1,
      PricewithoutVAT: documentDetail.priceWithoutVat || 0,
      InternalItemCode: "",
      ManufacturerName: "",
      ManufacturerSerialNumber: "",
      MeasurementUnit: "",
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
        value = ""; // need to change this
        break;
      case 1257:
        value = ""; // need to change this
        break;
      case 1258:
        value = documentDetail.transactionType;
        break;
      case 1259:
        value = itemData.InternalItemCode;
        break;
      case 1260:
        value = "abc";
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
        value = itemData.quantity;
        break;
      case 1265:
        value = documentDetail.priceWithoutVat || 0;
        break;
      case 1266:
        value = documentDetail.discountAmount || 0;
        break;
      case 1267:
        value = amount;
        break;
      case 1268:
        value = documentDetail.vatRate || 0;
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
