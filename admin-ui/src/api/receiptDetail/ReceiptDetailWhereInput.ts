import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ReceiptDetailWhereInput = {
  accountNumber?: StringNullableFilter;
  bankNumber?: IntNullableFilter;
  branchIdentifier?: StringNullableFilter;
  branchNumber?: IntNullableFilter;
  checkNumber?: IntNullableFilter;
  creditTransactionType?: IntNullableFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  payeeCompanyCode?: StringNullableFilter;
  paymentCheckClearanceDate?: DateTimeNullableFilter;
  paymentData?: JsonFilter;
  paymentType?: IntNullableFilter;
  swipedCardName?: StringNullableFilter;
  total?: DecimalNullableFilter;
  transactions?: TransactionListRelationFilter;
};
