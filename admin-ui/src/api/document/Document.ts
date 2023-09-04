import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { DocumentDetail } from "../documentDetail/DocumentDetail";
import { ReceiptDetail } from "../receiptDetail/ReceiptDetail";

export type Document = {
  business?: Business | null;
  canceledDocument: boolean | null;
  clientSupplier?: ClientsAndSupplier | null;
  createdAt: Date;
  documentDate: number | null;
  documentDetails?: Array<DocumentDetail>;
  documentNumber: number | null;
  documentProductionDate: number | null;
  documentType: number | null;
  id: string;
  linkedDocumentIds: string | null;
  receiptDetails?: Array<ReceiptDetail>;
  updatedAt: Date;
};
