import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemTransactionModuleBase } from "./base/itemTransaction.module.base";
import { ItemTransactionService } from "./itemTransaction.service";
import { ItemTransactionController } from "./itemTransaction.controller";
import { ItemTransactionResolver } from "./itemTransaction.resolver";

@Module({
  imports: [ItemTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemTransactionController],
  providers: [ItemTransactionService, ItemTransactionResolver],
  exports: [ItemTransactionService],
})
export class ItemTransactionModule {}
