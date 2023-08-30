import { Business } from "../business/Business";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  accountantClassificationCode: number | null;
  accountBalanceAtStartOfSegment: number | null;
  accountBalanceInForeignCurrency: number | null;
  accountKey: string | null;
  accountName: string | null;
  business?: Business | null;
  centerAccount: string | null;
  clientsAndSuppliers?: ClientsAndSupplier | null;
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
