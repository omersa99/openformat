import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailCreateNestedManyWithoutDocumentsInput } from "./DocumentDetailCreateNestedManyWithoutDocumentsInput";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  canceledDocument?: boolean | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDate?: number | null;
  documentDetails?: DocumentDetailCreateNestedManyWithoutDocumentsInput;
  documentNumber?: string | null;
  documentProductionDate?: number | null;
  documentType?: number | null;
  linkedDocumentIds?: string | null;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
