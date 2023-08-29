import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "actionOperation";

export const TransactionTitle = (record: TTransaction): string => {
  return record.actionOperation || String(record.id);
};
