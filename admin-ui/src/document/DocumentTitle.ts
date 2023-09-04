import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "linkedDocumentIds";

export const DocumentTitle = (record: TDocument): string => {
  return record.linkedDocumentIds || String(record.id);
};
