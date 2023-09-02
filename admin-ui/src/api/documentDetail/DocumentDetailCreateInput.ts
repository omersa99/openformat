import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type DocumentDetailCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: number | null;
  quantity?: number | null;
  transactionType?: string | null;
  vatRate?: number | null;
};
