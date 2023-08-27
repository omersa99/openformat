import { SortOrder } from "../../util/SortOrder";

export type ClientsAndSupplierOrderByInput = {
  addressCity?: SortOrder;
  addressCountry?: SortOrder;
  addressHouseNumber?: SortOrder;
  addressPostalCode?: SortOrder;
  addressStreet?: SortOrder;
  businessNumber?: SortOrder;
  countryCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
