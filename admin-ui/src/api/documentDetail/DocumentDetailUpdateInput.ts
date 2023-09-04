import { Decimal } from "decimal.js";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { TransactionUpdateManyWithoutDocumentDetailsInput } from "./TransactionUpdateManyWithoutDocumentDetailsInput";

export type DocumentDetailUpdateInput = {
  discountAmount?: Decimal | null;
  document?: DocumentWhereUniqueInput;
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: Decimal | null;
  quantity?: number | null;
  transactions?: TransactionUpdateManyWithoutDocumentDetailsInput;
  transactionType?: string | null;
  vatRate?: number | null;
};
