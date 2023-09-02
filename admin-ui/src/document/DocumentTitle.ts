import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "documentNumber";

export const DocumentTitle = (record: TDocument): string => {
  return record.documentNumber || String(record.id);
};
