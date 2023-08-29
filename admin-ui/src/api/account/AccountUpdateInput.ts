import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
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
  transaction?: TransactionUpdateManyWithoutAccountsInput;
};
