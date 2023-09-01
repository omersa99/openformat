/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ItemService } from "../item.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemCreateInput } from "./ItemCreateInput";
import { ItemWhereInput } from "./ItemWhereInput";
import { ItemWhereUniqueInput } from "./ItemWhereUniqueInput";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemUpdateInput } from "./ItemUpdateInput";
import { Item } from "./Item";
import { DocumentDetailFindManyArgs } from "../../documentDetail/base/DocumentDetailFindManyArgs";
import { DocumentDetail } from "../../documentDetail/base/DocumentDetail";
import { DocumentDetailWhereUniqueInput } from "../../documentDetail/base/DocumentDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemControllerBase {
  constructor(
    protected readonly service: ItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Item })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ItemCreateInput): Promise<Item> {
    return await this.service.create({
      data: {
        ...data,

        business: data.business
          ? {
              connect: data.business,
            }
          : undefined,
      },
      select: {
        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        data: true,
        id: true,
        internalItemCode: true,
        itemName: true,
        sortingCode: true,
        sortingCodeDescription: true,
        supplierManufacturerCodeInProcurement: true,
        unitOfMeasurementDescription: true,
        universalItemCode: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Item] })
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Item[]> {
    const args = plainToClass(ItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        data: true,
        id: true,
        internalItemCode: true,
        itemName: true,
        sortingCode: true,
        sortingCodeDescription: true,
        supplierManufacturerCodeInProcurement: true,
        unitOfMeasurementDescription: true,
        universalItemCode: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        data: true,
        id: true,
        internalItemCode: true,
        itemName: true,
        sortingCode: true,
        sortingCodeDescription: true,
        supplierManufacturerCodeInProcurement: true,
        unitOfMeasurementDescription: true,
        universalItemCode: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() data: ItemUpdateInput
  ): Promise<Item | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          business: data.business
            ? {
                connect: data.business,
              }
            : undefined,
        },
        select: {
          business: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          data: true,
          id: true,
          internalItemCode: true,
          itemName: true,
          sortingCode: true,
          sortingCodeDescription: true,
          supplierManufacturerCodeInProcurement: true,
          unitOfMeasurementDescription: true,
          universalItemCode: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          business: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          data: true,
          id: true,
          internalItemCode: true,
          itemName: true,
          sortingCode: true,
          sortingCodeDescription: true,
          supplierManufacturerCodeInProcurement: true,
          unitOfMeasurementDescription: true,
          universalItemCode: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/documentDetails")
  @ApiNestedQuery(DocumentDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DocumentDetail",
    action: "read",
    possession: "any",
  })
  async findManyDocumentDetails(
    @common.Req() request: Request,
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<DocumentDetail[]> {
    const query = plainToClass(DocumentDetailFindManyArgs, request.query);
    const results = await this.service.findDocumentDetails(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        item: {
          select: {
            id: true,
          },
        },

        priceWithoutVat: true,
        quantity: true,
        transactionType: true,
        updatedAt: true,
        vatRate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documentDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async connectDocumentDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: DocumentDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentDetails: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documentDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async updateDocumentDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: DocumentDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentDetails: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documentDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async disconnectDocumentDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: DocumentDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentDetails: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
