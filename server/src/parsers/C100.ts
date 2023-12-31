import { FieldDefinition } from "src/types";

export const C100Fields: FieldDefinition[] = [
  {
    Field_Id: 1200,
    Field_Name: "קוד רשומה",
    Translation: "Record Code",
    Type: "Str",
    Length: 4,
  },
  {
    Field_Id: 1201,
    Field_Name: "מס רשומה בקובץ",
    Translation: "File Record Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1202,
    Field_Name: "מס עוסק מורשה",
    Translation: "Authorized Business Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1203,
    Field_Name: "סוג מסמך",
    Translation: "Document Type",
    Type: "Num",
    Length: 3,
  },
  {
    Field_Id: 1204,
    Field_Name: "מספר מסמך",
    Translation: "Document Number",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1205,
    Field_Name: "תאריך הפקת מסמך",
    Translation: "Document Production Date",
    Type: "Num",
    Length: 8,
  },
  {
    Field_Id: 1206,
    Field_Name: "שעת הפקת מסמך",
    Translation: "Document Production Time",
    Type: "Num",
    Length: 4,
  },
  {
    Field_Id: 1207,
    Field_Name: "שם לקוח/ספק",
    Translation: "Customer/Supplier Name",
    Type: "Str",
    Length: 50,
  },
  {
    Field_Id: 1208,
    Field_Name: "מען הלקוח/ספק - רחוב",
    Translation: "Customer/Supplier Address - Street",
    Type: "Str",
    Length: 50,
  },
  {
    Field_Id: 1209,
    Field_Name: "מען הלקוח/ספק - מס בית",
    Translation: "Customer/Supplier Address - House Number",
    Type: "Str",
    Length: 10,
  },
  {
    Field_Id: 1210,
    Field_Name: "מען הלקוח/ספק - עיר",
    Translation: "Customer/Supplier Address - City",
    Type: "Str",
    Length: 30,
  },
  {
    Field_Id: 1211,
    Field_Name: "מען הלקוח/ספק - מיקוד",
    Translation: "Customer/Supplier Address - Zip Code",
    Type: "Str",
    Length: 8,
  },
  {
    Field_Id: 1212,
    Field_Name: "מען הלקוח/ספק - מדינה",
    Translation: "Customer/Supplier Address - State",
    Type: "Str",
    Length: 30,
  },
  {
    Field_Id: 1213,
    Field_Name: "מען הלקוח/ספק - קוד מדינה",
    Translation: "Customer/Supplier Address - Country Code",
    Type: "Str",
    Length: 2,
  },
  {
    Field_Id: 1214,
    Field_Name: "טלפון לקוח/ספק",
    Translation: "Customer/Supplier Telephone",
    Type: "Str",
    Length: 15,
  },
  {
    Field_Id: 1215,
    Field_Name: "מס עוסק מורשה לקוח/ספק",
    Translation: "Authorized Business Number of Customer/Supplier",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1216,
    Field_Name: "תאריך ערך",
    Translation: "Modified Date",
    Type: "Num",
    Length: 8,
  },
  {
    Field_Id: 1217,
    Field_Name: 'סכום סופי של המסמך במט"ח',
    Translation: "Final Document Amount in Foreign Currency",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1218,
    Field_Name: 'קוד מט"ח',
    Translation: "Foreign Currency Code",
    Type: "Str",
    Length: 3,
  },
  {
    Field_Id: 1219,
    Field_Name: "סכום המסמך לפני הנחת מסמך",
    Translation: "Document Amount Before Document Deduction",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1220,
    Field_Name: "הנחת מסמך",
    Translation: "Document Deduction",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1221,
    Field_Name: 'סכום המסמך לאחר הנחות ללא מע"מ',
    Translation: "Document Amount After Deductions Without VAT",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1222,
    Field_Name: 'סכום המע"מ',
    Translation: "VAT Amount",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1223,
    Field_Name: 'סכום המסמך כולל מע"מ',
    Translation: "Total Document Amount Including VAT",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1224,
    Field_Name: "סכום הניכוי במקור",
    Translation: "Original Deduction Amount",
    Type: "NumData",
    Length: 12,
  },
  {
    Field_Id: 1225,
    Field_Name: "מפתח הלקוח אצל המוכר או מפתח הספק אצל הקונה",
    Translation: "Customer Key at Seller or Supplier Key at Buyer",
    Type: "Str",
    Length: 15,
  },
  {
    Field_Id: 1226,
    Field_Name: "שדה התאמה",
    Translation: "Matching Field",
    Type: "Str",
    Length: 10,
  },
  {
    Field_Id: 1228,
    Field_Name: "מסמך מבוטל",
    Translation: "Canceled Document",
    Type: "Str",
    Length: 1,
  },
  {
    Field_Id: 1230,
    Field_Name: "תאריך המסמך",
    Translation: "Document Date",
    Type: "Num",
    Length: 8,
  },
  {
    Field_Id: 1231,
    Field_Name: "מזהה סניף/ענף",
    Translation: "Branch/Branch Identifier",
    Type: "Str",
    Length: 7,
  },
  {
    Field_Id: 1233,
    Field_Name: "מבצע הפעולה",
    Translation: "Action Operation",
    Type: "Str",
    Length: 9,
  },
  {
    Field_Id: 1234,
    Field_Name: "שדה מקשר לשורה",
    Translation: "Row Linking Field",
    Type: "Num",
    Length: 7,
  },
  {
    Field_Id: 1235,
    Field_Name: "שטח לנתונים עתידיים",
    Translation: "Future Data Area",
    Type: "Str",
    Length: 13,
  },
];
