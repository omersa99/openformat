/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ClientsAndSupplier,
  Document,
  Account,
  Business,
} from "@prisma/client";

export class ClientsAndSupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ClientsAndSupplierCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierCountArgs>
  ): Promise<number> {
    return this.prisma.clientsAndSupplier.count(args);
  }

  async findMany<T extends Prisma.ClientsAndSupplierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierFindManyArgs>
  ): Promise<ClientsAndSupplier[]> {
    return this.prisma.clientsAndSupplier.findMany(args);
  }
  async findOne<T extends Prisma.ClientsAndSupplierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierFindUniqueArgs>
  ): Promise<ClientsAndSupplier | null> {
    return this.prisma.clientsAndSupplier.findUnique(args);
  }
  async create<T extends Prisma.ClientsAndSupplierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierCreateArgs>
  ): Promise<ClientsAndSupplier> {
    return this.prisma.clientsAndSupplier.create<T>(args);
  }
  async update<T extends Prisma.ClientsAndSupplierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierUpdateArgs>
  ): Promise<ClientsAndSupplier> {
    return this.prisma.clientsAndSupplier.update<T>(args);
  }
  async delete<T extends Prisma.ClientsAndSupplierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierDeleteArgs>
  ): Promise<ClientsAndSupplier> {
    return this.prisma.clientsAndSupplier.delete(args);
  }

  async findDocuments(
    parentId: string,
    args: Prisma.DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.prisma.clientsAndSupplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .documents(args);
  }

  async getAccount(parentId: string): Promise<Account | null> {
    return this.prisma.clientsAndSupplier
      .findUnique({
        where: { id: parentId },
      })
      .account();
  }

  async getBusiness(parentId: string): Promise<Business | null> {
    return this.prisma.clientsAndSupplier
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }
}
