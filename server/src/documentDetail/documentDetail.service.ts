import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentDetailServiceBase } from "./base/documentDetail.service.base";
import { mapToDocumentDetailModel, parseD110 } from "src/parsers/parseD110";
import { Prisma, DocumentDetail } from "@prisma/client";
import { handleTransactionBasedOnDocumentType } from "src/transaction/transactionHandler";

@Injectable()
export class DocumentDetailService extends DocumentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.DocumentDetailCreateArgs>(args: Prisma.SelectSubset<T, Prisma.DocumentDetailCreateArgs>): Promise<DocumentDetail> {
    const documentDetail = await super.create(args);
    try {
      const relatedDocument = await this.prisma.document.findFirst({
        where: { id: documentDetail.documentId || "123456789" },
      });

      if (relatedDocument) {
        await handleTransactionBasedOnDocumentType(relatedDocument, this.prisma, documentDetail);
      } else {
        console.error("There is no related Document");
      }
    } catch (error) {
      console.error("there is no related Document", error);
    }

    return documentDetail;
  }
  async Line2DocumentDetails(line: string) {
    try {
      const parsedData = parseD110(line);
      const DocumentDetailsData = mapToDocumentDetailModel(parsedData);
      const DocumentNumber = parsedData["Document Number"];
      // get document
      const baseDocument = await this.prisma.document.findFirst({
        where: {
          documentNumber: DocumentNumber.toString(),
        },
      });

      const itemLine = await this.prisma.item.findFirst({
        where: {
          internalItemCode: parsedData["Internal Item Code"],
        },
      });
      console.log(itemLine, DocumentDetailsData);
      // return itemLine;
      const createdDocumentDetails = await this.prisma.documentDetail.create({
        data: {
          ...DocumentDetailsData,
          document: {
            connect: {
              id: baseDocument?.id,
            },
          },
          item: {
            connect: {
              id: itemLine?.id,
            },
          },
        },
      });
    } catch (error) {
      console.error("An error occurred while creating the account:", error);
    }
  }
}
