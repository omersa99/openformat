import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentDetailServiceBase } from "./base/documentDetail.service.base";

@Injectable()
export class DocumentDetailService extends DocumentDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
