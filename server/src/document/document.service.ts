import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentServiceBase } from "./base/document.service.base";
import { mapToDocumentModel, parseC100 } from "src/parsers/parseC100";

@Injectable()
export class DocumentService extends DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async Line2Document(line: string) {
    try {
      const parsedData = parseC100(line);
      const documentData = mapToDocumentModel(parsedData);

      // Check if a Document with the specified document number already exists
      const existingDocument = await this.prisma.document.findFirst({
        where: {
          documentNumber: documentData.documentNumber,
        },
      });

      if (existingDocument) {
        console.log("Document with the specified document number already exists.");
        return;
      }

      // Create or find the ClientsAndSupplier record based on the customer/supplier business number
      let clientSupplierRecord;
      const businessNumber = parsedData["Authorized Business Number of Customer/Supplier"];

      const existingClientSupplierRecord = await this.prisma.clientsAndSupplier.findFirst({
        where: {
          businessNumber: businessNumber.toString(),
        },
      });

      if (existingClientSupplierRecord) {
        clientSupplierRecord = existingClientSupplierRecord;
      } else {
        clientSupplierRecord = await this.prisma.clientsAndSupplier.create({
          data: {
            businessNumber: businessNumber.toString(),
          },
        });
      }

      // Create the Document record and associate it with the ClientsAndSupplier record
      const createdDocument = await this.prisma.document.create({
        data: {
          ...documentData,
          clientSupplier: {
            connect: {
              id: clientSupplierRecord.id,
            },
          },
        },
      });

      console.log("Document created:", createdDocument);
    } catch (error) {
      console.error("An error occurred while creating the document:", error);
    }
  }
}
