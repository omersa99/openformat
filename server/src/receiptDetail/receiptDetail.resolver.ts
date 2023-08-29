import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReceiptDetailResolverBase } from "./base/receiptDetail.resolver.base";
import { ReceiptDetail } from "./base/ReceiptDetail";
import { ReceiptDetailService } from "./receiptDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReceiptDetail)
export class ReceiptDetailResolver extends ReceiptDetailResolverBase {
  constructor(
    protected readonly service: ReceiptDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
