import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DocumentDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  priceWithoutVat?: IntNullableFilter;
  quantity?: IntNullableFilter;
  transactionType?: "Service" | "Sale" | "ServiceAndSales";
  vatRate?: IntNullableFilter;
};
