import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { Decimal } from "decimal.js";
import { DocumentDetailCreateNestedManyWithoutDocumentsInput } from "./DocumentDetailCreateNestedManyWithoutDocumentsInput";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business: BusinessWhereUniqueInput;
  canceledDocument?: boolean | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  deductionAmount?: Decimal | null;
  documentDate?: Date | null;
  documentDetails?: DocumentDetailCreateNestedManyWithoutDocumentsInput;
  documentNumber?: number | null;
  documentType: number;
  linkedDocumentIds?: string | null;
  modifiedDate?: Date | null;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
