import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { Decimal } from "decimal.js";
import { DocumentDetailUpdateManyWithoutDocumentsInput } from "./DocumentDetailUpdateManyWithoutDocumentsInput";
import { ReceiptDetailUpdateManyWithoutDocumentsInput } from "./ReceiptDetailUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  business?: BusinessWhereUniqueInput;
  canceledDocument?: boolean | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  deductionAmount?: Decimal | null;
  documentDate?: Date | null;
  documentDetails?: DocumentDetailUpdateManyWithoutDocumentsInput;
  documentNumber?: number | null;
  documentType?: number;
  linkedDocumentIds?: string | null;
  modifiedDate?: Date | null;
  receiptDetails?: ReceiptDetailUpdateManyWithoutDocumentsInput;
};
