import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentDetailService } from "./documentDetail.service";
import { DocumentDetailControllerBase } from "./base/documentDetail.controller.base";

@swagger.ApiTags("documentDetails")
@common.Controller("documentDetails")
export class DocumentDetailController extends DocumentDetailControllerBase {
  constructor(
    protected readonly service: DocumentDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
