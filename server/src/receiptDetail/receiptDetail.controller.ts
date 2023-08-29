import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReceiptDetailService } from "./receiptDetail.service";
import { ReceiptDetailControllerBase } from "./base/receiptDetail.controller.base";

@swagger.ApiTags("receiptDetails")
@common.Controller("receiptDetails")
export class ReceiptDetailController extends ReceiptDetailControllerBase {
  constructor(
    protected readonly service: ReceiptDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
