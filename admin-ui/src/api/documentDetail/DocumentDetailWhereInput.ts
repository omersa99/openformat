import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  priceWithoutVat?: IntNullableFilter;
  quantity?: IntNullableFilter;
  transactions?: TransactionListRelationFilter;
  transactionType?: StringNullableFilter;
  vatRate?: IntNullableFilter;
};
