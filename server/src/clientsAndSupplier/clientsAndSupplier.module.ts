import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientsAndSupplierModuleBase } from "./base/clientsAndSupplier.module.base";
import { ClientsAndSupplierService } from "./clientsAndSupplier.service";
import { ClientsAndSupplierController } from "./clientsAndSupplier.controller";
import { ClientsAndSupplierResolver } from "./clientsAndSupplier.resolver";

@Module({
  imports: [ClientsAndSupplierModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientsAndSupplierController],
  providers: [ClientsAndSupplierService, ClientsAndSupplierResolver],
  exports: [ClientsAndSupplierService],
})
export class ClientsAndSupplierModule {}
