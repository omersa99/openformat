import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BusinessModuleBase } from "./base/business.module.base";
import { BusinessService } from "./business.service";
import { BusinessController } from "./business.controller";
import { BusinessResolver } from "./business.resolver";
import { ClientsAndSupplierService } from "src/clientsAndSupplier/clientsAndSupplier.service";
import { DocumentService } from "src/document/document.service";
import { DocumentDetailService } from "src/documentDetail/documentDetail.service";
import { ReceiptDetailService } from "src/receiptDetail/receiptDetail.service";
import { ItemService } from "src/item/item.service";

@Module({
  imports: [BusinessModuleBase, forwardRef(() => AuthModule)],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessResolver, ClientsAndSupplierService, DocumentService, ReceiptDetailService, ItemService, DocumentDetailService], // Add it here
  exports: [BusinessService],
})
export class BusinessModule {}
