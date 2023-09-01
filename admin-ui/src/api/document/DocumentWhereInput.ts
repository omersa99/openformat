import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  documentType?: IntNullableFilter;
  id?: StringFilter;
  linkedDocumentIDs?: JsonFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
