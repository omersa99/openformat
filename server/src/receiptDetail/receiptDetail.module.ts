import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReceiptDetailModuleBase } from "./base/receiptDetail.module.base";
import { ReceiptDetailService } from "./receiptDetail.service";
import { ReceiptDetailController } from "./receiptDetail.controller";
import { ReceiptDetailResolver } from "./receiptDetail.resolver";

@Module({
  imports: [ReceiptDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReceiptDetailController],
  providers: [ReceiptDetailService, ReceiptDetailResolver],
  exports: [ReceiptDetailService],
})
export class ReceiptDetailModule {}
