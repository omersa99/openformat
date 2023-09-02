import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  priceWithoutVat?: IntNullableFilter;
  quantity?: IntNullableFilter;
  transactionType?: StringNullableFilter;
  vatRate?: IntNullableFilter;
};
