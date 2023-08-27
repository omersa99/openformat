import { SortOrder } from "../../util/SortOrder";

export type ItemTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inflows?: SortOrder;
  internalItemCode?: SortOrder;
  outflows?: SortOrder;
  updatedAt?: SortOrder;
};
