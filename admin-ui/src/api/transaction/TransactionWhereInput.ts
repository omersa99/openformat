import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  accountInTransaction?: AccountWhereUniqueInput;
  actionAmount?: IntNullableFilter;
  actionIndicator?: IntNullableFilter;
  actionOperation?: StringNullableFilter;
  counterAccount?: StringNullableFilter;
  data?: JsonFilter;
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  entryDate?: DateTimeNullableFilter;
  foreignCurrencyAmount?: IntNullableFilter;
  foreignCurrencyCode?: StringNullableFilter;
  id?: StringFilter;
  lineNumberInTransaction?: IntNullableFilter;
  modifiedDate?: DateTimeNullableFilter;
  portion?: IntNullableFilter;
  reference?: StringNullableFilter;
  reference_2?: StringNullableFilter;
  transactionNumber?: IntNullableFilter;
  transactionType?: StringNullableFilter;
};
