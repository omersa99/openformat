import { Document } from "../document/Document";

export type DocumentDetail = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  updatedAt: Date;
};
