import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { Decimal } from "decimal.js";
import { TransactionUpdateManyWithoutReceiptDetailsInput } from "./TransactionUpdateManyWithoutReceiptDetailsInput";

export type ReceiptDetailUpdateInput = {
  document?: DocumentWhereUniqueInput | null;
  paymentCheckClearanceDate?: Date | null;
  paymentData?: InputJsonValue;
  paymentType?: number | null;
  total?: Decimal | null;
  transactions?: TransactionUpdateManyWithoutReceiptDetailsInput;
};
