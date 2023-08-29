import { Bankbook } from "../bankbook/Bankbook";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  accountantClassificationCode: number | null;
  accountBalanceAtStartOfSegment: number | null;
  accountBalanceInForeignCurrency: number | null;
  accountKey: string | null;
  accountName: string | null;
  bankbook?: Bankbook | null;
  centerAccount: string | null;
  createdAt: Date;
  currencyCodeForForeignCurrency: string | null;
  examinedBalanceCode: string | null;
  examinedBalanceCodeDescription: string | null;
  id: string;
  totalCredit: number | null;
  totalDebit: number | null;
  transaction?: Array<Transaction>;
  updatedAt: Date;
};
