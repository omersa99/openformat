import { ClientsAndSupplierWhereInput } from "./ClientsAndSupplierWhereInput";
import { ClientsAndSupplierOrderByInput } from "./ClientsAndSupplierOrderByInput";

export type ClientsAndSupplierFindManyArgs = {
  where?: ClientsAndSupplierWhereInput;
  orderBy?: Array<ClientsAndSupplierOrderByInput>;
  skip?: number;
  take?: number;
};
