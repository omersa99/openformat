import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountInTransactionId?: SortOrder;
  actionAmount?: SortOrder;
  actionIndicator?: SortOrder;
  actionOperation?: SortOrder;
  counterAccount?: SortOrder;
  createdAt?: SortOrder;
  data?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  entryDate?: SortOrder;
  foreignCurrencyAmount?: SortOrder;
  foreignCurrencyCode?: SortOrder;
  id?: SortOrder;
  lineNumberInTransaction?: SortOrder;
  matchingField_1?: SortOrder;
  matchingField_2?: SortOrder;
  modifiedDate?: SortOrder;
  portion?: SortOrder;
  reference?: SortOrder;
  reference_2?: SortOrder;
  referenceDocumentType?: SortOrder;
  referenceDocumentType_2?: SortOrder;
  transactionNumber?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
