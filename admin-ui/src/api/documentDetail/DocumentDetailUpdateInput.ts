import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { Decimal } from "decimal.js";
import { TransactionUpdateManyWithoutDocumentDetailsInput } from "./TransactionUpdateManyWithoutDocumentDetailsInput";

export type DocumentDetailUpdateInput = {
  document?: DocumentWhereUniqueInput;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: Decimal | null;
  quantity?: number | null;
  transactions?: TransactionUpdateManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
