import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClientsAndSupplierResolverBase } from "./base/clientsAndSupplier.resolver.base";
import { ClientsAndSupplier } from "./base/ClientsAndSupplier";
import { ClientsAndSupplierService } from "./clientsAndSupplier.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClientsAndSupplier)
export class ClientsAndSupplierResolver extends ClientsAndSupplierResolverBase {
  constructor(
    protected readonly service: ClientsAndSupplierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
