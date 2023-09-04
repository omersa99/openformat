import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailUpdateManyWithoutDocumentsInput } from "./DocumentDetailUpdateManyWithoutDocumentsInput";
import { ReceiptDetailUpdateManyWithoutDocumentsInput } from "./ReceiptDetailUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  business?: BusinessWhereUniqueInput;
  canceledDocument?: boolean | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDate?: number | null;
  documentDetails?: DocumentDetailUpdateManyWithoutDocumentsInput;
  documentNumber?: number | null;
  documentProductionDate?: number | null;
  documentType?: number;
  linkedDocumentIds?: string | null;
  receiptDetails?: ReceiptDetailUpdateManyWithoutDocumentsInput;
};
