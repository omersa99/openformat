import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceiptDetailServiceBase } from "./base/receiptDetail.service.base";

@Injectable()
export class ReceiptDetailService extends ReceiptDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
