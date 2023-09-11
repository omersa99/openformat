import { FieldDefinition } from "src/types";

export const A100Fields: FieldDefinition[] = [
  {
    Field_Id: 1100,
    Field_Name: "קוד רשומה",
    Translation: "Record Code",
    Type: "Str",
    Length: 4,
  },
  {
    Field_Id: 1101,
    Field_Name: "מס רשומה בקובץ",
    Translation: "File Record Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1102,
    Field_Name: "מספר עוסק מורשה",
    Translation: "Authorized Dealer Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1103,
    Field_Name: "מזהה ראשי",
    Translation: "Primary Identifier",
    Type: "Num",
    Length: 15,
  },
  {
    Field_Id: 1104,
    Field_Name: "קבוע מערכת",
    Translation: "System Constant",
    Type: "Str",
    Length: 8,
  },
  {
    Field_Id: 1105,
    Field_Name: "שטח לנתונים עתידיים",
    Translation: "Area for Future Data",
    Type: "Str",
    Length: 50,
  },
];
