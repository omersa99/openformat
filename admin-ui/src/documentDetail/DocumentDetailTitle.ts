import { DocumentDetail as TDocumentDetail } from "../api/documentDetail/DocumentDetail";

export const DOCUMENTDETAIL_TITLE_FIELD = "transactionType";

export const DocumentDetailTitle = (record: TDocumentDetail): string => {
  return record.transactionType || String(record.id);
};
