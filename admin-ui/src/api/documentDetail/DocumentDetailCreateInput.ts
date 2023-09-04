import { Decimal } from "decimal.js";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { TransactionCreateNestedManyWithoutDocumentDetailsInput } from "./TransactionCreateNestedManyWithoutDocumentDetailsInput";

export type DocumentDetailCreateInput = {
  discountAmount?: Decimal | null;
  document: DocumentWhereUniqueInput;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: Decimal | null;
  quantity?: number | null;
  transactions?: TransactionCreateNestedManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
