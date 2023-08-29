import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountantClassificationCode?: number | null;
  accountBalanceAtStartOfSegment?: number | null;
  accountBalanceInForeignCurrency?: number | null;
  accountKey?: string | null;
  accountName?: string | null;
  business?: BusinessWhereUniqueInput | null;
  centerAccount?: string | null;
  currencyCodeForForeignCurrency?: string | null;
  examinedBalanceCode?: string | null;
  examinedBalanceCodeDescription?: string | null;
  totalCredit?: number | null;
  totalDebit?: number | null;
  transaction?: TransactionCreateNestedManyWithoutAccountsInput;
};
