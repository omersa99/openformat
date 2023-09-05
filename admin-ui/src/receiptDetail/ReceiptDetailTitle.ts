import { ReceiptDetail as TReceiptDetail } from "../api/receiptDetail/ReceiptDetail";

export const RECEIPTDETAIL_TITLE_FIELD = "swipedCardName";

export const ReceiptDetailTitle = (record: TReceiptDetail): string => {
  return record.swipedCardName || String(record.id);
};
