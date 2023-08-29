import { BankbookWhereUniqueInput } from "../bankbook/BankbookWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountantClassificationCode?: number | null;
  accountBalanceAtStartOfSegment?: number | null;
  accountBalanceInForeignCurrency?: number | null;
  accountKey?: string | null;
  accountName?: string | null;
  bankbook?: BankbookWhereUniqueInput | null;
  centerAccount?: string | null;
  currencyCodeForForeignCurrency?: string | null;
  examinedBalanceCode?: string | null;
  examinedBalanceCodeDescription?: string | null;
  totalCredit?: number | null;
  totalDebit?: number | null;
  transaction?: TransactionCreateNestedManyWithoutAccountsInput;
};
