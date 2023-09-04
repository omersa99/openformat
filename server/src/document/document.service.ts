import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentServiceBase } from "./base/document.service.base";
import { mapToDocumentModel, parseC100 } from "src/parsers/parseC100";
import { Prisma, Document } from "@prisma/client";
import { getNextDocumentNumber } from "./documentNumGenerate";
import { TransactionService } from "src/transaction/transaction.service";

@Injectable()
export class DocumentService extends DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async create<T extends Prisma.DocumentCreateArgs>(args: Prisma.SelectSubset<T, Prisma.DocumentCreateArgs>): Promise<Document> {
    let businessId = args.data.business?.connect?.id || "0";

    let docType = args.data.documentType || 200;

    const newDocumentNumber = await getNextDocumentNumber(this.prisma, businessId, docType);
    const modifiedData: Prisma.DocumentCreateInput = {
      ...args.data,
      documentNumber: newDocumentNumber,
    };
    const newDocument = await super.create({ ...args, data: modifiedData });
    return newDocument;
  }

  async Line2Document(line: string) {
    try {
      const parsedData = parseC100(line);
      const documentData = mapToDocumentModel(parsedData);

      const authorizedBusinessNumber = parsedData["Authorized Business Number"];
      const existingBusinessRecord = await this.prisma.business.findFirst({
        where: { bn: authorizedBusinessNumber },
      });

      // Check if a Document with the specified document number already exists
      const existingDocument = await this.prisma.document.findFirst({
        where: {
          AND: [{ documentNumber: documentData.documentNumber }, { businessId: existingBusinessRecord?.id }],
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

      // if (existingClientSupplierRecord) {
      //   clientSupplierRecord = existingClientSupplierRecord;
      // } else {
      //   clientSupplierRecord = await this.prisma.clientsAndSupplier.create({
      //     data: {
      //       businessNumber: businessNumber.toString(),
      //       addressStreet: parsedData["Customer/Supplier Address - Street"],
      //       addressHouseNumber: parsedData["Customer/Supplier Address - House Number"],
      //       addressCity: parsedData["Customer/Supplier Address - City"],
      //       addressPostalCode: parsedData["Customer/Supplier Address - Postal Code"],
      //       addressCountry: parsedData["Customer/Supplier Address - Country"],
      //       name: parsedData["Customer/Supplier Name"],
      //     },
      //   });
      //   console.log("Client created:", clientSupplierRecord);
      // }
      if (existingClientSupplierRecord) {
        // Update existing record
        clientSupplierRecord = await this.prisma.clientsAndSupplier.update({
          where: {
            id: existingClientSupplierRecord.id,
          },
          data: {
            addressStreet: parsedData["Customer/Supplier Address - Street"],
            addressHouseNumber: parsedData["Customer/Supplier Address - House Number"],
            addressCity: parsedData["Customer/Supplier Address - City"],
            addressPostalCode: parsedData["Customer/Supplier Address - Postal Code"],
            addressCountry: parsedData["Customer/Supplier Address - Country"],
            name: parsedData["Customer/Supplier Name"],
          },
        });
      } else {
        // Create new record
        clientSupplierRecord = await this.prisma.clientsAndSupplier.create({
          data: {
            businessNumber: businessNumber.toString(),
            addressStreet: parsedData["Customer/Supplier Address - Street"],
            addressHouseNumber: parsedData["Customer/Supplier Address - House Number"],
            addressCity: parsedData["Customer/Supplier Address - City"],
            addressPostalCode: parsedData["Customer/Supplier Address - Postal Code"],
            addressCountry: parsedData["Customer/Supplier Address - Country"],
            name: parsedData["Customer/Supplier Name"],
          },
        });
        console.log("Client created:", clientSupplierRecord);
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
          business: {
            connect: {
              id: existingBusinessRecord?.id,
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
