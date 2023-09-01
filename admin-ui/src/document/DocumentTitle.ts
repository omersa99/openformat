import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "fds";

export const DocumentTitle = (record: TDocument): string => {
  return record.fds || String(record.id);
};
