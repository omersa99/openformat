import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  canceledDocument?: BooleanNullableFilter;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  documentDate?: IntNullableFilter;
  documentDetails?: DocumentDetailListRelationFilter;
  documentNumber?: IntNullableFilter;
  documentProductionDate?: IntNullableFilter;
  documentType?: IntNullableFilter;
  id?: StringFilter;
  linkedDocumentIds?: StringNullableFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
