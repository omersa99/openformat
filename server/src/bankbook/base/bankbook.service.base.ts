/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bankbook } from "@prisma/client";

export class BankbookServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BankbookCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookCountArgs>
  ): Promise<number> {
    return this.prisma.bankbook.count(args);
  }

  async findMany<T extends Prisma.BankbookFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookFindManyArgs>
  ): Promise<Bankbook[]> {
    return this.prisma.bankbook.findMany(args);
  }
  async findOne<T extends Prisma.BankbookFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookFindUniqueArgs>
  ): Promise<Bankbook | null> {
    return this.prisma.bankbook.findUnique(args);
  }
  async create<T extends Prisma.BankbookCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookCreateArgs>
  ): Promise<Bankbook> {
    return this.prisma.bankbook.create<T>(args);
  }
  async update<T extends Prisma.BankbookUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookUpdateArgs>
  ): Promise<Bankbook> {
    return this.prisma.bankbook.update<T>(args);
  }
  async delete<T extends Prisma.BankbookDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BankbookDeleteArgs>
  ): Promise<Bankbook> {
    return this.prisma.bankbook.delete(args);
  }
}
