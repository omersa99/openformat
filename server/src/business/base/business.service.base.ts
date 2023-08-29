/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Business, Account, Document } from "@prisma/client";

export class BusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BusinessCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessCountArgs>
  ): Promise<number> {
    return this.prisma.business.count(args);
  }

  async findMany<T extends Prisma.BusinessFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessFindManyArgs>
  ): Promise<Business[]> {
    return this.prisma.business.findMany(args);
  }
  async findOne<T extends Prisma.BusinessFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessFindUniqueArgs>
  ): Promise<Business | null> {
    return this.prisma.business.findUnique(args);
  }
  async create<T extends Prisma.BusinessCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessCreateArgs>
  ): Promise<Business> {
    return this.prisma.business.create<T>(args);
  }
  async update<T extends Prisma.BusinessUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessUpdateArgs>
  ): Promise<Business> {
    return this.prisma.business.update<T>(args);
  }
  async delete<T extends Prisma.BusinessDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BusinessDeleteArgs>
  ): Promise<Business> {
    return this.prisma.business.delete(args);
  }

  async findAccounts(
    parentId: string,
    args: Prisma.AccountFindManyArgs
  ): Promise<Account[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accounts(args);
  }

  async findDocuments(
    parentId: string,
    args: Prisma.DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .documents(args);
  }
}
