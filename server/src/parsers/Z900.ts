import { FieldDefinition } from "src/types";

export const Z900Fields: FieldDefinition[] = [
  {
    Field_Id: 1150,
    Field_Name: "קוד רשומה",
    Translation: "Record Code",
    Type: "Str",
    Length: 4,
  },
  {
    Field_Id: 1151,
    Field_Name: "מס רשומה בקובץ",
    Translation: "File Record Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1152,
    Field_Name: "מספר עוסק מורשה",
    Translation: "Authorized Dealer Number",
    Type: "Num",
    Length: 9,
  },
  {
    Field_Id: 1153,
    Field_Name: "מזהה ראשי",
    Translation: "Primary Identifier",
    Type: "Num",
    Length: 15,
  },
  {
    Field_Id: 1154,
    Field_Name: "קבוע מערכת",
    Translation: "System Constant",
    Type: "Str",
    Length: 8,
  },
  {
    Field_Id: 1155,
    Field_Name: "סך רשומות כולל בקובץ",
    Translation: "Total Records in File",
    Type: "Num",
    Length: 15,
  },
  {
    Field_Id: 1156,
    Field_Name: "שטח לנתונים עתידיים",
    Translation: "Area for Future Data",
    Type: "Str",
    Length: 50,
  },
];
