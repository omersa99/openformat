import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { Decimal } from "decimal.js";
import { DocumentDetail } from "../documentDetail/DocumentDetail";
import { ReceiptDetail } from "../receiptDetail/ReceiptDetail";

export type Document = {
  business?: Business;
  canceledDocument: boolean | null;
  clientSupplier?: ClientsAndSupplier | null;
  createdAt: Date;
  deductionAmount: Decimal | null;
  documentDate: Date | null;
  documentDetails?: Array<DocumentDetail>;
  documentNumber: number | null;
  documentType: number;
  id: string;
  linkedDocumentIds: string | null;
  modifiedDate: Date | null;
  receiptDetails?: Array<ReceiptDetail>;
  updatedAt: Date;
};
