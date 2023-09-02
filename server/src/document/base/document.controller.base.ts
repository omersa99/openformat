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
import { DocumentService } from "../document.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DocumentCreateInput } from "./DocumentCreateInput";
import { DocumentWhereInput } from "./DocumentWhereInput";
import { DocumentWhereUniqueInput } from "./DocumentWhereUniqueInput";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentUpdateInput } from "./DocumentUpdateInput";
import { Document } from "./Document";
import { DocumentDetailFindManyArgs } from "../../documentDetail/base/DocumentDetailFindManyArgs";
import { DocumentDetail } from "../../documentDetail/base/DocumentDetail";
import { DocumentDetailWhereUniqueInput } from "../../documentDetail/base/DocumentDetailWhereUniqueInput";
import { ReceiptDetailFindManyArgs } from "../../receiptDetail/base/ReceiptDetailFindManyArgs";
import { ReceiptDetail } from "../../receiptDetail/base/ReceiptDetail";
import { ReceiptDetailWhereUniqueInput } from "../../receiptDetail/base/ReceiptDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Document })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: DocumentCreateInput): Promise<Document> {
    return await this.service.create({
      data: {
        ...data,

        business: data.business
          ? {
              connect: data.business,
            }
          : undefined,

        clientSupplier: data.clientSupplier
          ? {
              connect: data.clientSupplier,
            }
          : undefined,
      },
      select: {
        business: {
          select: {
            id: true,
          },
        },

        canceledDocument: true,

        clientSupplier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        documentDate: true,
        documentNumber: true,
        documentProductionDate: true,
        documentType: true,
        id: true,
        linkedDocumentIds: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Document] })
  @ApiNestedQuery(DocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Document[]> {
    const args = plainToClass(DocumentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        canceledDocument: true,

        clientSupplier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        documentDate: true,
        documentNumber: true,
        documentProductionDate: true,
        documentType: true,
        id: true,
        linkedDocumentIds: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        canceledDocument: true,

        clientSupplier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        documentDate: true,
        documentNumber: true,
        documentProductionDate: true,
        documentType: true,
        id: true,
        linkedDocumentIds: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() data: DocumentUpdateInput
  ): Promise<Document | null> {
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

          clientSupplier: data.clientSupplier
            ? {
                connect: data.clientSupplier,
              }
            : undefined,
        },
        select: {
          business: {
            select: {
              id: true,
            },
          },

          canceledDocument: true,

          clientSupplier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          documentDate: true,
          documentNumber: true,
          documentProductionDate: true,
          documentType: true,
          id: true,
          linkedDocumentIds: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          business: {
            select: {
              id: true,
            },
          },

          canceledDocument: true,

          clientSupplier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          documentDate: true,
          documentNumber: true,
          documentProductionDate: true,
          documentType: true,
          id: true,
          linkedDocumentIds: true,
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
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<DocumentDetail[]> {
    const query = plainToClass(DocumentDetailFindManyArgs, request.query);
    const results = await this.service.findDocumentDetails(params.id, {
      ...query,
      select: {
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async connectDocumentDetails(
    @common.Param() params: DocumentWhereUniqueInput,
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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async updateDocumentDetails(
    @common.Param() params: DocumentWhereUniqueInput,
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
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async disconnectDocumentDetails(
    @common.Param() params: DocumentWhereUniqueInput,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/receiptDetails")
  @ApiNestedQuery(ReceiptDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ReceiptDetail",
    action: "read",
    possession: "any",
  })
  async findManyReceiptDetails(
    @common.Req() request: Request,
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<ReceiptDetail[]> {
    const query = plainToClass(ReceiptDetailFindManyArgs, request.query);
    const results = await this.service.findReceiptDetails(params.id, {
      ...query,
      select: {
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/receiptDetails")
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async connectReceiptDetails(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ReceiptDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptDetails: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/receiptDetails")
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async updateReceiptDetails(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ReceiptDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptDetails: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/receiptDetails")
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async disconnectReceiptDetails(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ReceiptDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptDetails: {
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
