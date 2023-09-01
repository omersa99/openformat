import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountServiceBase } from "./base/account.service.base";
import { mapToAccountModel, parseB110 } from "src/parsers/parseB110";

@Injectable()
export class AccountService extends AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async Line2Account(line: string) {
    try {
      const parsedData = parseB110(line);
      const accountData = mapToAccountModel(parsedData);

      // Check if an Account with the specified account key already exists
      const existingAccount = await this.prisma.account.findFirst({
        where: {
          accountKey: accountData.accountKey, // Adjust this line based on the actual field name for account key
        },
      });

      if (existingAccount) {
        console.log("Account with the specified account key already exists.");
        return;
      }

      // Create or find the ClientsAndSupplier record based on the business number
      let clientsAndSuppliersRecord;
      const businessNumber = parsedData["Supplier/Customer Business Number"];

      const existingClientsAndSuppliersRecord = await this.prisma.clientsAndSupplier.findFirst({
        where: {
          businessNumber: businessNumber.toString(), // assuming businessNumber is an integer
        },
      });

      if (existingClientsAndSuppliersRecord) {
        clientsAndSuppliersRecord = existingClientsAndSuppliersRecord;
      } else {
        clientsAndSuppliersRecord = await this.prisma.clientsAndSupplier.create({
          data: {
            businessNumber: businessNumber.toString(),
          },
        });
      }

      // Create or find the Business record based on the authorized business number
      let businessRecord;
      const authorizedBusinessNumber = parsedData["Authorized Business Number"];
      const existingBusinessRecord = await this.prisma.business.findFirst({
        where: { bn: authorizedBusinessNumber },
      });

      if (existingBusinessRecord) {
        businessRecord = existingBusinessRecord;
      } else {
        businessRecord = await this.prisma.business.create({
          data: { bn: authorizedBusinessNumber },
        });
      }

      // Create the Account record and associate it with the ClientsAndSupplier and Business records
      const createdAccount = await this.prisma.account.create({
        data: {
          ...accountData,
          clientsAndSuppliers: {
            connect: {
              id: clientsAndSuppliersRecord.id,
            },
          },
          business: {
            connect: {
              id: businessRecord.id,
            },
          },
        },
      });

      console.log("Account created:", createdAccount);
    } catch (error) {
      console.error("An error occurred while creating the account:", error);
    }
  }
}
