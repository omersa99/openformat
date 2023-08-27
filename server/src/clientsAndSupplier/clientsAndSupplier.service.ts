import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientsAndSupplierServiceBase } from "./base/clientsAndSupplier.service.base";

@Injectable()
export class ClientsAndSupplierService extends ClientsAndSupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
