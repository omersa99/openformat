import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DocumentDetailResolverBase } from "./base/documentDetail.resolver.base";
import { DocumentDetail } from "./base/DocumentDetail";
import { DocumentDetailService } from "./documentDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DocumentDetail)
export class DocumentDetailResolver extends DocumentDetailResolverBase {
  constructor(
    protected readonly service: DocumentDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
