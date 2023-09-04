import { Document } from "../document/Document";
import { JsonValue } from "type-fest";
import { Decimal } from "decimal.js";
import { Transaction } from "../transaction/Transaction";

export type ReceiptDetail = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  paymentCheckClearanceDate: Date | null;
  paymentData: JsonValue;
  paymentType: number | null;
  total: Decimal | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
