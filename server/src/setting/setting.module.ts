import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SettingModuleBase } from "./base/setting.module.base";
import { SettingService } from "./setting.service";
import { SettingController } from "./setting.controller";
import { SettingResolver } from "./setting.resolver";

@Module({
  imports: [SettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [SettingController],
  providers: [SettingService, SettingResolver],
  exports: [SettingService],
})
export class SettingModule {}
