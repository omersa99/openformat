import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { DocumentDetail } from "../documentDetail/DocumentDetail";
import { ReceiptDetail } from "../receiptDetail/ReceiptDetail";

export type Document = {
  business?: Business | null;
  clientSupplier?: ClientsAndSupplier | null;
  createdAt: Date;
  documentDetails?: Array<DocumentDetail>;
  id: string;
  receiptDetails?: Array<ReceiptDetail>;
  updatedAt: Date;
};
