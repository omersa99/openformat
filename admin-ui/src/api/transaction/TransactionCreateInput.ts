import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InputJsonValue } from "../../types";
import { DocumentDetailWhereUniqueInput } from "../documentDetail/DocumentDetailWhereUniqueInput";
import { ReceiptDetailWhereUniqueInput } from "../receiptDetail/ReceiptDetailWhereUniqueInput";

export type TransactionCreateInput = {
  accountInTransaction?: AccountWhereUniqueInput | null;
  actionAmount?: Decimal | null;
  actionIndicator?: number | null;
  actionOperation?: string | null;
  counterAccount?: string | null;
  data?: InputJsonValue;
  date?: Date | null;
  details?: string | null;
  documentDetail?: DocumentDetailWhereUniqueInput | null;
  entryDate?: Date | null;
  foreignCurrencyAmount?: number | null;
  foreignCurrencyCode?: string | null;
  lineNumberInTransaction?: number | null;
  modifiedDate?: Date | null;
  portion?: number | null;
  receiptDetail?: ReceiptDetailWhereUniqueInput | null;
  reference?: string | null;
  reference_2?: string | null;
  transactionNumber?: number | null;
  transactionType?: string | null;
};
