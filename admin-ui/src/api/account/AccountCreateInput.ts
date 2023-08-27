export type AccountCreateInput = {
  accountantClassificationCode?: number | null;
  accountBalanceAtStartOfSegment?: number | null;
  accountBalanceInForeignCurrency?: number | null;
  accountKey?: string | null;
  accountName?: string | null;
  centerAccount?: string | null;
  currencyCodeForForeignCurrency?: string | null;
  examinedBalanceCode?: string | null;
  examinedBalanceCodeDescription?: string | null;
  totalCredit?: number | null;
  totalDebit?: number | null;
};
