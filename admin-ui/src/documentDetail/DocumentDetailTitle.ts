import { DocumentDetail as TDocumentDetail } from "../api/documentDetail/DocumentDetail";

export const DOCUMENTDETAIL_TITLE_FIELD = "id";

export const DocumentDetailTitle = (record: TDocumentDetail): string => {
  return record.id || String(record.id);
};
