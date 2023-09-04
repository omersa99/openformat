import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { TransactionUpdateManyWithoutDocumentDetailsInput } from "./TransactionUpdateManyWithoutDocumentDetailsInput";

export type DocumentDetailUpdateInput = {
  document?: DocumentWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: number | null;
  quantity?: number | null;
  transactions?: TransactionUpdateManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
