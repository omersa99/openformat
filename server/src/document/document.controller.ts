import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentService } from "./document.service";
import { DocumentControllerBase } from "./base/document.controller.base";
import { handleC100Creation } from "src/generator/main";

@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentController extends DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @swagger.ApiBody({ type: String })
  @common.Post("code2Idocument")
  line2account(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.Line2Document(line); // Note the change here
  }

  @swagger.ApiBody({ type: String })
  @common.Post("document2Json")
  convertDocument2String(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.convertDocument2String(line); // Note the change here
  }
}
