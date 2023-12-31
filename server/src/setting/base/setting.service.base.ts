/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Setting, Business } from "@prisma/client";

export class SettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SettingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingCountArgs>
  ): Promise<number> {
    return this.prisma.setting.count(args);
  }

  async findMany<T extends Prisma.SettingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingFindManyArgs>
  ): Promise<Setting[]> {
    return this.prisma.setting.findMany(args);
  }
  async findOne<T extends Prisma.SettingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingFindUniqueArgs>
  ): Promise<Setting | null> {
    return this.prisma.setting.findUnique(args);
  }
  async create<T extends Prisma.SettingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingCreateArgs>
  ): Promise<Setting> {
    return this.prisma.setting.create<T>(args);
  }
  async update<T extends Prisma.SettingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingUpdateArgs>
  ): Promise<Setting> {
    return this.prisma.setting.update<T>(args);
  }
  async delete<T extends Prisma.SettingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SettingDeleteArgs>
  ): Promise<Setting> {
    return this.prisma.setting.delete(args);
  }

  async getBusiness(parentId: string): Promise<Business | null> {
    return this.prisma.setting
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }
}
