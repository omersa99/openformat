import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemTransactionService } from "./itemTransaction.service";
import { ItemTransactionControllerBase } from "./base/itemTransaction.controller.base";

@swagger.ApiTags("itemTransactions")
@common.Controller("itemTransactions")
export class ItemTransactionController extends ItemTransactionControllerBase {
  constructor(
    protected readonly service: ItemTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
