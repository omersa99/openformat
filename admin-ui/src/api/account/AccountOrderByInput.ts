import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountantClassificationCode?: SortOrder;
  accountBalanceAtStartOfSegment?: SortOrder;
  accountBalanceInForeignCurrency?: SortOrder;
  accountKey?: SortOrder;
  accountName?: SortOrder;
  businessId?: SortOrder;
  centerAccount?: SortOrder;
  clientsAndSuppliersId?: SortOrder;
  createdAt?: SortOrder;
  currencyCodeForForeignCurrency?: SortOrder;
  examinedBalanceCode?: SortOrder;
  examinedBalanceCodeDescription?: SortOrder;
  id?: SortOrder;
  totalCredit?: SortOrder;
  totalDebit?: SortOrder;
  updatedAt?: SortOrder;
};
