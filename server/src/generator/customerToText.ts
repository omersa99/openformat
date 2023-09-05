import { ClientsAndSupplier } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { FieldInfo } from "src/types";

export async function handleCustomerString(client: ClientsAndSupplier, prisma: PrismaService) {
  try {
    const clientData: FieldInfo[] = [
      {
        Field_Id: 1207,
        Field_Name: "שם לקוח/ספק",
        Translation: "Customer/Supplier Name",
        Type: "Str",
        Length: 50,
        value: client.name || "",
      },
      {
        Field_Id: 1208,
        Field_Name: "מען הלקוח/ספק - רחוב",
        Translation: "Customer/Supplier Address - Street",
        Type: "Str",
        Length: 50,
        value: client.addressStreet || "",
      },
      {
        Field_Id: 1209,
        Field_Name: "מען הלקוח/ספק - מס בית",
        Translation: "Customer/Supplier Address - House Number",
        Type: "Str",
        Length: 10,
        value: client.addressHouseNumber || "",
      },
      {
        Field_Id: 1210,
        Field_Name: "מען הלקוח/ספק - עיר",
        Translation: "Customer/Supplier Address - City",
        Type: "Str",
        Length: 30,
        value: client.addressCity || "",
      },
      {
        Field_Id: 1211,
        Field_Name: "מען הלקוח/ספק - מיקוד",
        Translation: "Customer/Supplier Address - Zip Code",
        Type: "Str",
        Length: 8,
        value: client.addressPostalCode || "",
      },
      {
        Field_Id: 1212,
        Field_Name: "מען הלקוח/ספק - מדינה",
        Translation: "Customer/Supplier Address - State",
        Type: "Str",
        Length: 30,
        value: client.addressCountry || "",
      },
      {
        Field_Id: 1213,
        Field_Name: "מען הלקוח/ספק - קוד מדינה",
        Translation: "Customer/Supplier Address - Country Code",
        Type: "Str",
        Length: 2,
        value: client.countryCode || "",
      },
      {
        Field_Id: 1214,
        Field_Name: "טלפון לקוח/ספק",
        Translation: "Customer/Supplier Telephone",
        Type: "Str",
        Length: 15,
        value: "",
      },
      {
        Field_Id: 1215,
        Field_Name: "מס עוסק מורשה לקוח/ספק",
        Translation: "Authorized Business Number of Customer/Supplier",
        Type: "Num",
        Length: 9,
        value: client.businessNumber || "",
      },
    ];

    return clientData;
  } catch (err) {
    console.log("Error finding Customer", err);
    return [
      {
        Field_Id: 1207,
        Field_Name: "שם לקוח/ספק",
        Translation: "Customer/Supplier Name",
        Type: "Str",
        Length: 204,
        value: "",
      },
      // ... (other default customerData values)
    ];
  }
}
