import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientsAndSupplierService } from "./clientsAndSupplier.service";
import { ClientsAndSupplierControllerBase } from "./base/clientsAndSupplier.controller.base";

@swagger.ApiTags("clientsAndSuppliers")
@common.Controller("clientsAndSuppliers")
export class ClientsAndSupplierController extends ClientsAndSupplierControllerBase {
  constructor(
    protected readonly service: ClientsAndSupplierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Post()
  @swagger.ApiBearerAuth()
  @swagger.ApiResponse({ status: 201, description: "Client/Supplier successfully created." })
  async create(@common.Body() createDto: any): Promise<any> {
    return this.service.create(createDto);
  }
}
