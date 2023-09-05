import { Document } from "../document/Document";
import { JsonValue } from "type-fest";
import { Decimal } from "decimal.js";
import { Transaction } from "../transaction/Transaction";

export type ReceiptDetail = {
  accountNumber: string | null;
  bankNumber: number | null;
  branchIdentifier: string | null;
  branchNumber: number | null;
  checkNumber: number | null;
  createdAt: Date;
  creditTransactionType: number | null;
  document?: Document;
  id: string;
  payeeCompanyCode: string | null;
  paymentCheckClearanceDate: Date | null;
  paymentData: JsonValue;
  paymentType: number | null;
  swipedCardName: string | null;
  total: Decimal | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
