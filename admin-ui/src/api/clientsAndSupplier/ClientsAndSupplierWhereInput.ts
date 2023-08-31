import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientsAndSupplierWhereInput = {
  account?: AccountWhereUniqueInput;
  addressCity?: StringNullableFilter;
  addressCountry?: StringNullableFilter;
  addressHouseNumber?: StringNullableFilter;
  addressPostalCode?: StringNullableFilter;
  addressStreet?: StringNullableFilter;
  businessNumber?: StringNullableFilter;
  countryCode?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
