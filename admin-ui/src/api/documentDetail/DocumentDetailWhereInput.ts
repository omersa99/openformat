import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  priceWithoutVat?: DecimalNullableFilter;
  quantity?: IntNullableFilter;
  transactions?: TransactionListRelationFilter;
  transactionType?: StringNullableFilter;
  vatRate?: IntNullableFilter;
};
