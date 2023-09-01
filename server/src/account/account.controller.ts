import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountService } from "./account.service";
import { AccountControllerBase } from "./base/account.controller.base";

@swagger.ApiTags("accounts")
@common.Controller("accounts")
export class AccountController extends AccountControllerBase {
  AccountService: any;
  constructor(
    protected readonly service: AccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Post("line")
  line2account(@common.Body() data: { line: string }) {
    const { line } = data;
    return this.service.Line2Account(line); // Note the change here

    // return "123";
  }
}
