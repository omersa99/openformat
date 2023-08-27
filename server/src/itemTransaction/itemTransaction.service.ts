import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTransactionServiceBase } from "./base/itemTransaction.service.base";

@Injectable()
export class ItemTransactionService extends ItemTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
