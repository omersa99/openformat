import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  businessId?: SortOrder;
  canceledDocument?: SortOrder;
  clientSupplierId?: SortOrder;
  createdAt?: SortOrder;
  deductionAmount?: SortOrder;
  documentDate?: SortOrder;
  documentNumber?: SortOrder;
  documentType?: SortOrder;
  id?: SortOrder;
  linkedDocumentIds?: SortOrder;
  modifiedDate?: SortOrder;
  updatedAt?: SortOrder;
};
