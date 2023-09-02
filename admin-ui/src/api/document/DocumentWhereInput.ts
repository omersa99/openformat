import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  canceledDocument?: BooleanNullableFilter;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  documentDate?: IntNullableFilter;
  documentDetails?: DocumentDetailListRelationFilter;
  documentNumber?: StringNullableFilter;
  documentProductionDate?: IntNullableFilter;
  documentType?: IntNullableFilter;
  id?: StringFilter;
  linkedDocumentIds?: StringNullableFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
