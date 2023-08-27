import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemTransactionWhereInput = {
  id?: StringFilter;
  inflows?: IntNullableFilter;
  internalItemCode?: StringNullableFilter;
  outflows?: IntNullableFilter;
};
