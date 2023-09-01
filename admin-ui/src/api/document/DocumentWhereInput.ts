import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  documentDetails?: DocumentDetailListRelationFilter;
  documentType?: IntNullableFilter;
  fds?: StringNullableFilter;
  id?: StringFilter;
  linkedDocumentIDs?: JsonFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
