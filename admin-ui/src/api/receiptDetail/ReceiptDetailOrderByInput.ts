import { SortOrder } from "../../util/SortOrder";

export type ReceiptDetailOrderByInput = {
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  paymentCheckClearanceDate?: SortOrder;
  paymentData?: SortOrder;
  paymentType?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
