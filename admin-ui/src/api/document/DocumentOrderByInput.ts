import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  businessId?: SortOrder;
  canceledDocument?: SortOrder;
  clientSupplierId?: SortOrder;
  createdAt?: SortOrder;
  documentDate?: SortOrder;
  documentNumber?: SortOrder;
  documentProductionDate?: SortOrder;
  documentType?: SortOrder;
  id?: SortOrder;
  linkedDocumentIds?: SortOrder;
  updatedAt?: SortOrder;
};
