import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientsAndSupplierServiceBase } from "./base/clientsAndSupplier.service.base";
import { Prisma, ClientsAndSupplier, Account } from "@prisma/client";

@Injectable()
export class ClientsAndSupplierService extends ClientsAndSupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.ClientsAndSupplierCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ClientsAndSupplierCreateArgs>): Promise<ClientsAndSupplier> {
    const clientsAndSupplierObj = await super.create(args);

    await this.prisma.account.create({
      data: {
        clientsAndSuppliersId: clientsAndSupplierObj.id,
        accountName: clientsAndSupplierObj.id,
      },
    });

    return clientsAndSupplierObj;
  }
}
