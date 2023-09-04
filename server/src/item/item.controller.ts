import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemService } from "./item.service";
import { ItemControllerBase } from "./base/item.controller.base";

@swagger.ApiTags("items")
@common.Controller("items")
export class ItemController extends ItemControllerBase {
  constructor(
    protected readonly service: ItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @swagger.ApiBody({ type: String })
  @common.Post("code2Item")
  line2account(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.Line2Item(line); // Note the change here
  }
}
