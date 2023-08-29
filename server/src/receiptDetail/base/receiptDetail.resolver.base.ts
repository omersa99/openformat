/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateReceiptDetailArgs } from "./CreateReceiptDetailArgs";
import { UpdateReceiptDetailArgs } from "./UpdateReceiptDetailArgs";
import { DeleteReceiptDetailArgs } from "./DeleteReceiptDetailArgs";
import { ReceiptDetailCountArgs } from "./ReceiptDetailCountArgs";
import { ReceiptDetailFindManyArgs } from "./ReceiptDetailFindManyArgs";
import { ReceiptDetailFindUniqueArgs } from "./ReceiptDetailFindUniqueArgs";
import { ReceiptDetail } from "./ReceiptDetail";
import { Document } from "../../document/base/Document";
import { ReceiptDetailService } from "../receiptDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReceiptDetail)
export class ReceiptDetailResolverBase {
  constructor(
    protected readonly service: ReceiptDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "read",
    possession: "any",
  })
  async _receiptDetailsMeta(
    @graphql.Args() args: ReceiptDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ReceiptDetail])
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "read",
    possession: "any",
  })
  async receiptDetails(
    @graphql.Args() args: ReceiptDetailFindManyArgs
  ): Promise<ReceiptDetail[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ReceiptDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "read",
    possession: "own",
  })
  async receiptDetail(
    @graphql.Args() args: ReceiptDetailFindUniqueArgs
  ): Promise<ReceiptDetail | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ReceiptDetail)
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "create",
    possession: "any",
  })
  async createReceiptDetail(
    @graphql.Args() args: CreateReceiptDetailArgs
  ): Promise<ReceiptDetail> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        document: args.data.document
          ? {
              connect: args.data.document,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ReceiptDetail)
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "update",
    possession: "any",
  })
  async updateReceiptDetail(
    @graphql.Args() args: UpdateReceiptDetailArgs
  ): Promise<ReceiptDetail | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          document: args.data.document
            ? {
                connect: args.data.document,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ReceiptDetail)
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "delete",
    possession: "any",
  })
  async deleteReceiptDetail(
    @graphql.Args() args: DeleteReceiptDetailArgs
  ): Promise<ReceiptDetail | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Document, {
    nullable: true,
    name: "document",
  })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async resolveFieldDocument(
    @graphql.Parent() parent: ReceiptDetail
  ): Promise<Document | null> {
    const result = await this.service.getDocument(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
