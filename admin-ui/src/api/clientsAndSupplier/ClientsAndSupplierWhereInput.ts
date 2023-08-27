import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientsAndSupplierWhereInput = {
  addressCity?: StringNullableFilter;
  addressCountry?: StringNullableFilter;
  addressHouseNumber?: StringNullableFilter;
  addressPostalCode?: StringNullableFilter;
  addressStreet?: StringNullableFilter;
  businessNumber?: StringNullableFilter;
  countryCode?: StringNullableFilter;
  id?: StringFilter;
};
