import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankbookService } from "./bankbook.service";
import { BankbookControllerBase } from "./base/bankbook.controller.base";

@swagger.ApiTags("bankbooks")
@common.Controller("bankbooks")
export class BankbookController extends BankbookControllerBase {
  constructor(
    protected readonly service: BankbookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
