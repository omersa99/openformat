import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailCreateNestedManyWithoutDocumentsInput } from "./DocumentDetailCreateNestedManyWithoutDocumentsInput";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business: BusinessWhereUniqueInput;
  canceledDocument?: boolean | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDate?: number | null;
  documentDetails?: DocumentDetailCreateNestedManyWithoutDocumentsInput;
  documentNumber?: number | null;
  documentProductionDate?: number | null;
  documentType: number;
  linkedDocumentIds?: string | null;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
