import { ItemTransaction as TItemTransaction } from "../api/itemTransaction/ItemTransaction";

export const ITEMTRANSACTION_TITLE_FIELD = "internalItemCode";

export const ItemTransactionTitle = (record: TItemTransaction): string => {
  return record.internalItemCode || String(record.id);
};
