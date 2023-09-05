import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { Decimal } from "decimal.js";
import { TransactionCreateNestedManyWithoutReceiptDetailsInput } from "./TransactionCreateNestedManyWithoutReceiptDetailsInput";

export type ReceiptDetailCreateInput = {
  accountNumber?: string | null;
  bankNumber?: number | null;
  branchIdentifier?: string | null;
  branchNumber?: number | null;
  checkNumber?: number | null;
  creditTransactionType?: number | null;
  document: DocumentWhereUniqueInput;
  payeeCompanyCode?: string | null;
  paymentCheckClearanceDate?: Date | null;
  paymentData?: InputJsonValue;
  paymentType?: number | null;
  swipedCardName?: string | null;
  total?: Decimal | null;
  transactions?: TransactionCreateNestedManyWithoutReceiptDetailsInput;
};
