import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceiptDetailServiceBase } from "./base/receiptDetail.service.base";
import { Prisma, ReceiptDetail } from "@prisma/client";
import { handleReceiptTransaction } from "src/transaction/handleReceiptTransaction";

@Injectable()
export class ReceiptDetailService extends ReceiptDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async create<T extends Prisma.ReceiptDetailCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ReceiptDetailCreateArgs>): Promise<ReceiptDetail> {
    const documentReceiptDetail = await super.create(args);

    try {
      const relatedDocument = await this.prisma.document.findUnique({
        where: { id: args.data.documentId },
      });

      await handleReceiptTransaction(relatedDocument, this.prisma, documentReceiptDetail);
    } catch (error) {
      console.error("there is no related Document", error);
    }

    return documentReceiptDetail;
  }
}
