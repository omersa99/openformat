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
        clientsAndSuppliers: {
          connect: {
            id: clientsAndSupplierObj.id,
          },
        },
        business: {
          connect: {
            id: clientsAndSupplierObj.businessId || "",
          },
        },
        accountName: clientsAndSupplierObj.name,
        examinedBalanceCodeDescription: "לקוחות",
        examinedBalanceCode: "100",
        accountKey: generateRandomNumber(15),
      },
    });

    return clientsAndSupplierObj;
  }
}

export function generateRandomNumber(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Generates a random digit from 0 to 9
  }
  return result;
}

const randomNumber = generateRandomNumber(15);
console.log(randomNumber);
