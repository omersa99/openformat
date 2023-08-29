import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  documentDetails?: DocumentDetailListRelationFilter;
  id?: StringFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
