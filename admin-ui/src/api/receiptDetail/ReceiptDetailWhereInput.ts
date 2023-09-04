import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ReceiptDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  paymentCheckClearanceDate?: DateTimeNullableFilter;
  paymentData?: JsonFilter;
  paymentType?: IntNullableFilter;
  total?: DecimalNullableFilter;
  transactions?: TransactionListRelationFilter;
};
