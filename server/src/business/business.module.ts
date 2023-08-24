import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BusinessModuleBase } from "./base/business.module.base";
import { BusinessService } from "./business.service";
import { BusinessController } from "./business.controller";
import { BusinessResolver } from "./business.resolver";

@Module({
  imports: [BusinessModuleBase, forwardRef(() => AuthModule)],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessResolver],
  exports: [BusinessService],
})
export class BusinessModule {}
