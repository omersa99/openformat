import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  accountantClassificationCode?: IntNullableFilter;
  accountBalanceAtStartOfSegment?: IntNullableFilter;
  accountBalanceInForeignCurrency?: IntNullableFilter;
  accountKey?: StringNullableFilter;
  accountName?: StringNullableFilter;
  business?: BusinessWhereUniqueInput;
  centerAccount?: StringNullableFilter;
  currencyCodeForForeignCurrency?: StringNullableFilter;
  examinedBalanceCode?: StringNullableFilter;
  examinedBalanceCodeDescription?: StringNullableFilter;
  id?: StringFilter;
  totalCredit?: IntNullableFilter;
  totalDebit?: IntNullableFilter;
  transaction?: TransactionListRelationFilter;
};
