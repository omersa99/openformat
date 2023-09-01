import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { DocumentDetail } from "../documentDetail/DocumentDetail";
import { JsonValue } from "type-fest";
import { ReceiptDetail } from "../receiptDetail/ReceiptDetail";

export type Document = {
  business?: Business | null;
  clientSupplier?: ClientsAndSupplier | null;
  createdAt: Date;
  documentDetails?: Array<DocumentDetail>;
  documentType: number | null;
  fds: string | null;
  id: string;
  linkedDocumentIDs: JsonValue;
  receiptDetails?: Array<ReceiptDetail>;
  updatedAt: Date;
};
