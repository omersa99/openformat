import { PrismaService } from "src/prisma/prisma.service";
import { Document } from "@prisma/client";

export async function fetchCustomerAccount(document: Document, prisma: PrismaService) {
  try {
    const customerAccount = await prisma.account.findFirst({
      where: { clientsAndSuppliersId: document.clientSupplierId || "0" },
    });
    return customerAccount;
  } catch (err) {
    console.log("Error finding customer account:", err);
    return null;
  }
}
