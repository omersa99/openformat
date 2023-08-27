import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemTransactionResolverBase } from "./base/itemTransaction.resolver.base";
import { ItemTransaction } from "./base/ItemTransaction";
import { ItemTransactionService } from "./itemTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemTransaction)
export class ItemTransactionResolver extends ItemTransactionResolverBase {
  constructor(
    protected readonly service: ItemTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
