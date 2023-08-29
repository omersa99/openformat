import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  businessId?: SortOrder;
  clientSupplierId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
