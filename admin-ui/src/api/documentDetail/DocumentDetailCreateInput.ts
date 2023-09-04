import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { Decimal } from "decimal.js";
import { TransactionCreateNestedManyWithoutDocumentDetailsInput } from "./TransactionCreateNestedManyWithoutDocumentDetailsInput";

export type DocumentDetailCreateInput = {
  document: DocumentWhereUniqueInput;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: Decimal | null;
  quantity?: number | null;
  transactions?: TransactionCreateNestedManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
