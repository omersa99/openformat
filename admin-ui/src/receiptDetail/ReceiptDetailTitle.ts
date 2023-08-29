import { ReceiptDetail as TReceiptDetail } from "../api/receiptDetail/ReceiptDetail";

export const RECEIPTDETAIL_TITLE_FIELD = "id";

export const ReceiptDetailTitle = (record: TReceiptDetail): string => {
  return record.id || String(record.id);
};
