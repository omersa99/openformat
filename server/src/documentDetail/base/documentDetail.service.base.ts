/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DocumentDetail, Item } from "@prisma/client";

export class DocumentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DocumentDetailCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailCountArgs>
  ): Promise<number> {
    return this.prisma.documentDetail.count(args);
  }

  async findMany<T extends Prisma.DocumentDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailFindManyArgs>
  ): Promise<DocumentDetail[]> {
    return this.prisma.documentDetail.findMany(args);
  }
  async findOne<T extends Prisma.DocumentDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailFindUniqueArgs>
  ): Promise<DocumentDetail | null> {
    return this.prisma.documentDetail.findUnique(args);
  }
  async create<T extends Prisma.DocumentDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailCreateArgs>
  ): Promise<DocumentDetail> {
    return this.prisma.documentDetail.create<T>(args);
  }
  async update<T extends Prisma.DocumentDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailUpdateArgs>
  ): Promise<DocumentDetail> {
    return this.prisma.documentDetail.update<T>(args);
  }
  async delete<T extends Prisma.DocumentDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDetailDeleteArgs>
  ): Promise<DocumentDetail> {
    return this.prisma.documentDetail.delete(args);
  }

  async getItem(parentId: string): Promise<Item | null> {
    return this.prisma.documentDetail
      .findUnique({
        where: { id: parentId },
      })
      .item();
  }
}
