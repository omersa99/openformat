import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accountantClassificationCode?: IntNullableFilter;
  accountBalanceAtStartOfSegment?: IntNullableFilter;
  accountBalanceInForeignCurrency?: IntNullableFilter;
  accountKey?: StringNullableFilter;
  accountName?: StringNullableFilter;
  centerAccount?: StringNullableFilter;
  currencyCodeForForeignCurrency?: StringNullableFilter;
  examinedBalanceCode?: StringNullableFilter;
  examinedBalanceCodeDescription?: StringNullableFilter;
  id?: StringFilter;
  totalCredit?: IntNullableFilter;
  totalDebit?: IntNullableFilter;
};
