import { SortOrder } from "../../util/SortOrder";

export type DocumentDetailOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  priceWithoutVat?: SortOrder;
  quantity?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  vatRate?: SortOrder;
};
