import { FieldDefinition } from "src/types";

export const B100Fields: FieldDefinition[] = [
  {
    Field_Id: 1350,
    Field_Name: "קוד רשומה",
    Translation: "Record Code",
    Type: "Str",
    Length: 4,
  },
  {
    Field_Id: 1351,
    Field_Name: "מס רשומה בקובץ",
    Translation: "File Record Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1352,
    Field_Name: "מס עוסק מורשה",
    Translation: "Authorized Business Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1353,
    Field_Name: "מספר תנועה",
    Translation: "Transaction Number",
    Type: "Num",
    Length: 10,
  },
  {
    Field_Id: 1354,
    Field_Name: "מספר שורה בתנועה",
    Translation: "Line Number in Transaction",
    Type: "Num",
    Length: 5,
  },
  {
    Field_Id: 1355,
    Field_Name: "מנה",
    Translation: "Portion",
    Type: "Num",
    Length: 8,
  },
  {
    Field_Id: 1356,
    Field_Name: "סוג תנועה",
    Translation: "Transaction Type",
    Type: "Str",
    Length: 15,
  },
  {
    Field_Id: 1357,
    Field_Name: "אסמכתא",
    Translation: "Reference",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1358,
    Field_Name: "סוג מסמך האסמכתא",
    Translation: "Reference Document Type",
    Type: "Num",
    Length: 3,
  },
  {
    Field_Id: 1359,
    Field_Name: "אסמכתא 2",
    Translation: "Reference 2",
    Type: "Str",
    Length: 20,
  },
  {
    Field_Id: 1360,
    Field_Name: "סוג מסמך האסמכתא 2",
    Translation: "Reference Document Type 2",
    Type: "Num",
    Length: 3,
  },
  {
    Field_Id: 1361,
    Field_Name: "פרטים",
    Translation: "Details",
    Type: "Str",
    Length: 50,
  },
  {
    Field_Id: 1362,
    Field_Name: "תאריך",
    Translation: "Date",
    Type: "Date",
    Length: 8,
  },
  {
    Field_Id: 1363,
    Field_Name: "תאריך ערך",
    Translation: "Modified Date",
    Type: "Date",
    Length: 8,
  },
  {
    Field_Id: 1364,
    Field_Name: "חשבון בתנועה",
    Translation: "Account in Transaction",
    Type: "Str",
    Length: 15,
  },
  {
    Field_Id: 1365,
    Field_Name: "חשבון נגדי",
    Translation: "Counter Account",
    Type: "Str",
    Length: 15,
  },
  {
    Field_Id: 1366,
    Field_Name: "סימן הפעולה",
    Translation: "Action Indicator",
    Type: "Num",
    Length: 1,
  },
  {
    Field_Id: 1367,
    Field_Name: 'קוד מטבע מט"ח',
    Translation: "Foreign Currency Code",
    Type: "Str",
    Length: 3,
  },
  {
    Field_Id: 1368,
    Field_Name: "סכום הפעולה",
    Translation: "Action Amount",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1369,
    Field_Name: 'סכום מט"ח',
    Translation: "Foreign Currency Amount",
    Type: "NumData",
    Length: 15,
  },
  {
    Field_Id: 1370,
    Field_Name: "שדה כמות",
    Translation: "Quantity Field",
    Type: "NumData",
    Length: 12,
  },
  {
    Field_Id: 1371,
    Field_Name: "שדה התאמה 1",
    Translation: "Matching Field 1",
    Type: "Str",
    Length: 10,
  },
  {
    Field_Id: 1372,
    Field_Name: "שדה התאמה 2",
    Translation: "Matching Field 2",
    Type: "Str",
    Length: 10,
  },
  {
    Field_Id: 1374,
    Field_Name: "מזהה סניף/ענף",
    Translation: "Branch/Branch Identifier",
    Type: "Str",
    Length: 7,
  },
  {
    Field_Id: 1375,
    Field_Name: "תאריך הזנה",
    Translation: "Entry Date",
    Type: "Date",
    Length: 8,
  },
  {
    Field_Id: 1376,
    Field_Name: "מבצע פעולה",
    Translation: "Action Operation",
    Type: "Str",
    Length: 9,
  },
  {
    Field_Id: 1377,
    Field_Name: "שטח לנתונים עתידיים",
    Translation: "Future Data Area",
    Type: "Str",
    Length: 25,
  },
];
