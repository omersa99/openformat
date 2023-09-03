import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessServiceBase } from "./base/business.service.base";
import { Prisma, Business } from "@prisma/client";
import { defaultAccountsData } from "src/account/defaultAccounts";

@Injectable()
export class BusinessService extends BusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.BusinessCreateArgs>(args: Prisma.SelectSubset<T, Prisma.BusinessCreateArgs>): Promise<Business> {
    const newBusiness = await super.create(args);

    await this.prisma.setting.create({
      data: {
        business: {
          connect: { id: newBusiness.id },
        },
      },
    });

    await this.createDefaultAccounts(newBusiness.id);

    return newBusiness;
  }

  async createDefaultAccounts(businessId: string) {
    const defaultAccounts = defaultAccountsData.map((account) => ({
      ...account,
      businessId,
    }));

    await this.prisma.account.createMany({
      data: defaultAccounts,
    });
  }
}
