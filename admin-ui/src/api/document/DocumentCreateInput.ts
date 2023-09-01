import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailCreateNestedManyWithoutDocumentsInput } from "./DocumentDetailCreateNestedManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDetails?: DocumentDetailCreateNestedManyWithoutDocumentsInput;
  documentType?: number | null;
  fds?: string | null;
  linkedDocumentIDs?: InputJsonValue;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
