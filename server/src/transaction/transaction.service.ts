import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionServiceBase } from "./base/transaction.service.base";
import { Prisma, Transaction } from "@prisma/client";

@Injectable()
export class TransactionService extends TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async create<T extends Prisma.TransactionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>): Promise<Transaction> {
    const newTransaction = await super.create(args);

    return newTransaction;
  }
}
