import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailUpdateManyWithoutDocumentsInput } from "./DocumentDetailUpdateManyWithoutDocumentsInput";
import { ReceiptDetailUpdateManyWithoutDocumentsInput } from "./ReceiptDetailUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDetails?: DocumentDetailUpdateManyWithoutDocumentsInput;
  receiptDetails?: ReceiptDetailUpdateManyWithoutDocumentsInput;
};
