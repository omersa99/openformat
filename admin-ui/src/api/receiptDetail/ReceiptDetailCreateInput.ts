import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { Decimal } from "decimal.js";
import { TransactionCreateNestedManyWithoutReceiptDetailsInput } from "./TransactionCreateNestedManyWithoutReceiptDetailsInput";

export type ReceiptDetailCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  paymentCheckClearanceDate?: Date | null;
  paymentData?: InputJsonValue;
  paymentType?: number | null;
  total?: Decimal | null;
  transactions?: TransactionCreateNestedManyWithoutReceiptDetailsInput;
};
