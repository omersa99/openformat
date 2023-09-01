import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { JsonValue } from "type-fest";
import { ReceiptDetail } from "../receiptDetail/ReceiptDetail";

export type Document = {
  business?: Business | null;
  clientSupplier?: ClientsAndSupplier | null;
  createdAt: Date;
  documentType: number | null;
  id: string;
  linkedDocumentIDs: JsonValue;
  receiptDetails?: Array<ReceiptDetail>;
  updatedAt: Date;
};
