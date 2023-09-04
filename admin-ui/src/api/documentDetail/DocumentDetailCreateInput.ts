import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { TransactionCreateNestedManyWithoutDocumentDetailsInput } from "./TransactionCreateNestedManyWithoutDocumentDetailsInput";

export type DocumentDetailCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: number | null;
  quantity?: number | null;
  transactions?: TransactionCreateNestedManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
