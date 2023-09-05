import { SortOrder } from "../../util/SortOrder";

export type ReceiptDetailOrderByInput = {
  accountNumber?: SortOrder;
  bankNumber?: SortOrder;
  branchIdentifier?: SortOrder;
  branchNumber?: SortOrder;
  checkNumber?: SortOrder;
  createdAt?: SortOrder;
  creditTransactionType?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  payeeCompanyCode?: SortOrder;
  paymentCheckClearanceDate?: SortOrder;
  paymentData?: SortOrder;
  paymentType?: SortOrder;
  swipedCardName?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
