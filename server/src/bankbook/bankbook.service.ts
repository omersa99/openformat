import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankbookServiceBase } from "./base/bankbook.service.base";

@Injectable()
export class BankbookService extends BankbookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
