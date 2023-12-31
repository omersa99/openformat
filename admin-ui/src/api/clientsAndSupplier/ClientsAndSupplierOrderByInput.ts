import { SortOrder } from "../../util/SortOrder";

export type ClientsAndSupplierOrderByInput = {
  accountId?: SortOrder;
  addressCity?: SortOrder;
  addressCountry?: SortOrder;
  addressHouseNumber?: SortOrder;
  addressPostalCode?: SortOrder;
  addressStreet?: SortOrder;
  businessId?: SortOrder;
  businessNumber?: SortOrder;
  countryCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
