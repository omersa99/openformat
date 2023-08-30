import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  accountingSettings?: SortOrder;
  businessId?: SortOrder;
  businessSettings?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
