import { Document } from "../document/Document";

export type ReceiptDetail = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  updatedAt: Date;
};
