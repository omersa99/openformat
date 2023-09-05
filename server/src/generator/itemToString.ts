import { Item } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { FieldInfo } from "src/types";

export async function handleItemString(item: Item, prisma: PrismaService) {
  try {
  } catch (err) {
    console.log("Error finding Item", err);
    return [
      {
        Field_Id: 1301,
        Field_Name: "שם פריט",
        Translation: "Item Name",
        Type: "Str",
        Length: 50,
        value: "",
      },
      // ... (other default itemData values)
    ];
  }
}
