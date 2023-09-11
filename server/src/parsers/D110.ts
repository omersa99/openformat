import { FieldDefinition } from "src/types";

export const D110Fields: FieldDefinition[] = [
  {
    Field_Id: 1250,
    Field_Name: "קוד רשומה",
    Translation: "Record Code",
    Type: "Str",
    Length: 4,
  },
  {
    Field_Id: 1251,
    Field_Name: "מס רשומה בקובץ",
    Translation: "File Record Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1252,
    Field_Name: "מס עוסק מורשה",
    Translation: "Authorized Business Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1253,
    Field_Name: "סוג המסמך",
    Translation: "Document Type",
    Type: "Num",
    Length: 3,
  },
  {
    Field_Id: 1254,
    Field_Name: "מספר המסמך",
    Translation: "Document Number",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1255,
    Field_Name: "מספר שורה במסמך",
    Translation: "Line Number in Document",
    Type: "Num",
    Length: 4,
  },
  {
    Field_Id: 1256,
    Field_Name: "סוג מסמך בסיס",
    Translation: "Base Document Type",
    Type: "Num",
    Length: 3,
  },
  {
    Field_Id: 1257,
    Field_Name: "מספר מסמך בסיס",
    Translation: "Base Document Number",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1258,
    Field_Name: "סוג עסקה",
    Translation: "Transaction Type",
    Type: "Num",
    Length: 1,
  },
  {
    Field_Id: 1259,
    Field_Name: 'מק"ט פנימי',
    Translation: "Internal Item Code",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1260,
    Field_Name: "תיאור הטובין שנמכר או השירות שניתן",
    Translation: "Description of Goods Sold or Service Provided",
    Type: "Str",
    Length: 30,
  },
  {
    Field_Id: 1261,
    Field_Name: "שם היצרן",
    Translation: "Manufacturer Name",
    Type: "Str",
    Length: 50,
  },
  {
    Field_Id: 1262,
    Field_Name: "מספר סידורי של המוצר המוטבע על המוצר על ידי היצרן",
    Translation: "Serial Number of the Product Embedded on the Product by the Manufacturer",
    Type: "Str",
    Length: 30,
  },
  {
    Field_Id: 1263,
    Field_Name: "תיאור יחידת המידה",
    Translation: "Measurement Unit Description",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1264,
    Field_Name: "הכמות",
    Translation: "Quantity",
    Type: "NumData",
    Length: 17,
  },
  {
    Field_Id: 1265,
    Field_Name: 'מחיר ליחידה ללא מע"מ',
    Translation: "Unit Price without VAT",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1266,
    Field_Name: "הנחת שורה",
    Translation: "Line Discount",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1267,
    Field_Name: "סך סכום לשורה",
    Translation: "Total Amount per Line",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1268,
    Field_Name: 'שיעור המע"מ בשורה',
    Translation: "VAT Rate per Line",
    Type: "Num",
    Length: 4,
  },
  {
    Field_Id: 1270,
    Field_Name: "מזהה סניף/ענף",
    Translation: "Branch/Branch Identifier",
    Type: "Str",
    Length: 7,
  },
  {
    Field_Id: 1272,
    Field_Name: "תאריך המסמך",
    Translation: "Document Date",
    Type: "Date",
    Length: 8,
  },
  {
    Field_Id: 1273,
    Field_Name: "שדה מקשר לכותרת",
    Translation: "Title-Related Field",
    Type: "Num",
    Length: 7,
  },
  {
    Field_Id: 1274,
    Field_Name: "מזהה סניף/ענף למסמך בסיס",
    Translation: "Branch/Branch Identifier for Base Document",
    Type: "Str",
    Length: 7,
  },
  {
    Field_Id: 1275,
    Field_Name: "שטח לנתונים עתידיים",
    Translation: "Future Data Area",
    Type: "Str",
    Length: 21,
  },
];
