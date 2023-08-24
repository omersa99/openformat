import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankbookModuleBase } from "./base/bankbook.module.base";
import { BankbookService } from "./bankbook.service";
import { BankbookController } from "./bankbook.controller";
import { BankbookResolver } from "./bankbook.resolver";

@Module({
  imports: [BankbookModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankbookController],
  providers: [BankbookService, BankbookResolver],
  exports: [BankbookService],
})
export class BankbookModule {}
