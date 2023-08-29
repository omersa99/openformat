import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailCreateNestedManyWithoutDocumentsInput } from "./DocumentDetailCreateNestedManyWithoutDocumentsInput";
import { ReceiptDetailCreateNestedManyWithoutDocumentsInput } from "./ReceiptDetailCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDetails?: DocumentDetailCreateNestedManyWithoutDocumentsInput;
  receiptDetails?: ReceiptDetailCreateNestedManyWithoutDocumentsInput;
};
