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
  @swagger.ApiBody({ type: String })
  @common.Post("code2Idocumentdetails")
  line2account(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.Line2DocumentDetails(line); // Note the change here
  }
}
