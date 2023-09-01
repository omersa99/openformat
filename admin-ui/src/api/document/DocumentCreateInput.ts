import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentType?: number | null;
  linkedDocumentIDs?: InputJsonValue;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
