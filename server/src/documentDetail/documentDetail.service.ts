import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentDetailServiceBase } from "./base/documentDetail.service.base";
import { mapToDocumentDetailModel, parseD110 } from "src/parsers/parseD110";

@Injectable()
export class DocumentDetailService extends DocumentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async Line2DocumentDetails(line: string) {
    try {
      const parsedData = parseD110(line);
      const DocumentDetailsData = mapToDocumentDetailModel(parsedData);

      // get document
      const baseDocument = await this.prisma.document.findFirst({
        where: {
          documentNumber: parsedData["Base Document Number"],
        },
      });

      const itemLine = await this.prisma.item.findFirst({
        where: {
          internalItemCode: parsedData["Internal Item Code"],
        },
      });

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
