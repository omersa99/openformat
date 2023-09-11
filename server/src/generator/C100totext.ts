import { PrismaService } from "src/prisma/prisma.service";
import { handleCustomerString } from "./customerToText";
import { DocumentJson, FieldInfo } from "src/types";
import { calculateDocumentBalances } from "./main";

export async function C100AsJson(documentID: string, prisma: PrismaService, generalCounter: number) {
  let document;
  try {
    document = await prisma.document.findUnique({ where: { id: documentID } });

    let customerID = document?.clientSupplierId;
    let customer = await prisma.clientsAndSupplier.findUnique({ where: { id: customerID || "123" } });
    let customerData: DocumentJson[] = [];
    if (customer) {
      customerData = await handleCustomerString(customer, prisma);
    } else {
      customerData = [
        {
          Field_Id: 1207,
          Field_Name: "שם לקוח/ספק",
          Translation: "Customer/Supplier Name",
          Type: "Str",
          Length: 204,
          value: "",
        },
      ];
    }

    const { TotalbeforeDiscount, Totaldiscount, TotalVATAmount, TotalDocumentWithVATAmount } = await calculateDocumentBalances(document, prisma);

    const C100ModifiedFields: DocumentJson[] = [
      {
        Field_Id: 1200,
        Field_Name: "קוד רשומה",
        Translation: "Record Code",
        Type: "Str",
        Length: 4,
        value: "C100",
      },
      {
        Field_Id: 1201,
        Field_Name: "מס רשומה בקובץ",
        Translation: "File Record Number",
        Type: "Num",
        Length: 9,
        value: generalCounter,
      },
      {
        Field_Id: 1202,
        Field_Name: "מס עוסק מורשה",
        Translation: "Authorized Business Number",
        Type: "Num",
        Length: 9,
        value: 0,
      },
      {
        Field_Id: 1203,
        Field_Name: "סוג מסמך",
        Translation: "Document Type",
        Type: "Num",
        Length: 3,
        value: document?.documentType,
      },
      {
        Field_Id: 1204,
        Field_Name: "מספר מסמך",
        Translation: "Document Number",
        Type: "Str",
        Length: 20,
        value: document?.documentNumber,
      },
      {
        Field_Id: 1205,
        Field_Name: "תאריך הפקת מסמך",
        Translation: "Document Production Date",
        Type: "Date",
        Length: 8,
        value: document?.createdAt,
      },
      {
        Field_Id: 1206,
        Field_Name: "שעת הפקת מסמך",
        Translation: "Document Production Time",
        Type: "Time",
        Length: 4,
        value: document?.createdAt,
      },

      ...customerData,

      {
        Field_Id: 1216,
        Field_Name: "תאריך ערך",
        Translation: "Modified Date",
        Type: "Date",
        Length: 8,
        value: document?.modifiedDate || document?.createdAt, //Have to change this to modified date
      },
      {
        Field_Id: 1217,
        Field_Name: 'סכום סופי של המסמך במט"ח',
        Translation: "Final Document Amount in Foreign Currency",
        Type: "NumData",
        Length: 15,
        value: 0,
      },
      {
        Field_Id: 1218,
        Field_Name: 'קוד מט"ח',
        Translation: "Foreign Currency Code",
        Type: "Str",
        Length: 3,
        value: "",
      },
      {
        Field_Id: 1219,
        Field_Name: "סכום המסמך לפני הנחת מסמך",
        Translation: "Document Amount Before Document Deduction",
        Type: "NumData",
        Length: 15,
        value: TotalbeforeDiscount,
      },
      {
        Field_Id: 1220,
        Field_Name: "הנחת מסמך",
        Translation: "Document Deduction",
        Type: "NumData",
        Length: 15,
        value: -Totaldiscount,
      },
      {
        Field_Id: 1221,
        Field_Name: 'סכום המסמך לאחר הנחות ללא מע"מ',
        Translation: "Document Amount After Deductions Without VAT",
        Type: "NumData",
        Length: 15,
        value: TotalbeforeDiscount - Totaldiscount,
      },
      {
        Field_Id: 1222,
        Field_Name: 'סכום המע"מ',
        Translation: "VAT Amount",
        Type: "NumData",
        Length: 15,
        value: TotalVATAmount,
      },
      {
        Field_Id: 1223,
        Field_Name: 'סכום המסמך כולל מע"מ',
        Translation: "Total Document Amount Including VAT",
        Type: "NumData",
        Length: 15,
        value: TotalDocumentWithVATAmount,
      },
      {
        Field_Id: 1224,
        Field_Name: "סכום הניכוי במקור",
        Translation: "Original Deduction Amount",
        Type: "NumData",
        Length: 12,
        value: document?.deductionAmount || 0,
      },
      {
        Field_Id: 1225,
        Field_Name: "מפתח הלקוח אצל המוכר או מפתח הספק אצל הקונה",
        Translation: "Customer Key at Seller or Supplier Key at Buyer",
        Type: "Str",
        Length: 15,
        value: customer?.businessNumber,
      },
      {
        Field_Id: 1226,
        Field_Name: "שדה התאמה",
        Translation: "Matching Field",
        Type: "Str",
        Length: 10,
        value: "0",
      },
      {
        Field_Id: 1228,
        Field_Name: "מסמך מבוטל",
        Translation: "Canceled Document",
        Type: "Str",
        Length: 1,
        value: "0",
      },
      {
        Field_Id: 1230,
        Field_Name: "תאריך המסמך",
        Translation: "Document Date",
        Type: "Date",
        Length: 8,
        value: document?.documentDate || document?.createdAt,
      },
      {
        Field_Id: 1231,
        Field_Name: "מזהה סניף/ענף",
        Translation: "Branch/Branch Identifier",
        Type: "Str",
        Length: 7,
        value: "",
      },
      {
        Field_Id: 1233,
        Field_Name: "מבצע הפעולה",
        Translation: "Action Operation",
        Type: "Str",
        Length: 9,
        value: "",
      },
      {
        Field_Id: 1234,
        Field_Name: "שדה מקשר לשורה",
        Translation: "Row Linking Field",
        Type: "Num",
        Length: 7,
        value: 0,
      },
      {
        Field_Id: 1235,
        Field_Name: "שטח לנתונים עתידיים",
        Translation: "Future Data Area",
        Type: "Str",
        Length: 13,
        value: "",
      },
    ];

    return C100ModifiedFields;
  } catch (err) {
    console.log("Error finding document", err);
    return;
  }
}
