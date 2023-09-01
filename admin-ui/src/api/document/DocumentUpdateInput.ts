import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailUpdateManyWithoutDocumentsInput } from "./DocumentDetailUpdateManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";
import { ReceiptDetailUpdateManyWithoutDocumentsInput } from "./ReceiptDetailUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput | null;
  documentDetails?: DocumentDetailUpdateManyWithoutDocumentsInput;
  documentType?: number | null;
  fds?: string | null;
  linkedDocumentIDs?: InputJsonValue;
  receiptDetails?: ReceiptDetailUpdateManyWithoutDocumentsInput;
};
