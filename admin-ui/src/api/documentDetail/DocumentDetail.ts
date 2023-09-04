import { Document } from "../document/Document";
import { Item } from "../item/Item";
import { Transaction } from "../transaction/Transaction";

export type DocumentDetail = {
  createdAt: Date;
  document?: Document;
  id: string;
  item?: Item | null;
  priceWithoutVat: number | null;
  quantity: number | null;
  transactions?: Array<Transaction>;
  transactionType: string | null;
  updatedAt: Date;
  vatRate: number | null;
};
