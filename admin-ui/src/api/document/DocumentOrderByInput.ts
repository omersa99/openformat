import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  businessId?: SortOrder;
  clientSupplierId?: SortOrder;
  createdAt?: SortOrder;
  documentType?: SortOrder;
  id?: SortOrder;
  linkedDocumentIDs?: SortOrder;
  updatedAt?: SortOrder;
};
