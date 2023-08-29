import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentDetailModuleBase } from "./base/documentDetail.module.base";
import { DocumentDetailService } from "./documentDetail.service";
import { DocumentDetailController } from "./documentDetail.controller";
import { DocumentDetailResolver } from "./documentDetail.resolver";

@Module({
  imports: [DocumentDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentDetailController],
  providers: [DocumentDetailService, DocumentDetailResolver],
  exports: [DocumentDetailService],
})
export class DocumentDetailModule {}
