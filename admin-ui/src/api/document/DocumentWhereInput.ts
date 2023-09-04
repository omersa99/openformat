import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientsAndSupplierWhereUniqueInput } from "../clientsAndSupplier/ClientsAndSupplierWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReceiptDetailListRelationFilter } from "../receiptDetail/ReceiptDetailListRelationFilter";

export type DocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  canceledDocument?: BooleanNullableFilter;
  clientSupplier?: ClientsAndSupplierWhereUniqueInput;
  deductionAmount?: DecimalNullableFilter;
  documentDate?: DateTimeNullableFilter;
  documentDetails?: DocumentDetailListRelationFilter;
  documentNumber?: IntNullableFilter;
  documentType?: IntFilter;
  id?: StringFilter;
  linkedDocumentIds?: StringNullableFilter;
  modifiedDate?: DateTimeNullableFilter;
  receiptDetails?: ReceiptDetailListRelationFilter;
};
