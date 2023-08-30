import { Document } from "../document/Document";
import { Item } from "../item/Item";

export type DocumentDetail = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  item?: Item | null;
  priceWithoutVat: number | null;
  quantity: number | null;
  transactionType?: "Service" | "Sale" | "ServiceAndSales" | null;
  updatedAt: Date;
  vatRate: number | null;
};
