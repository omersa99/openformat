import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type DocumentDetailUpdateInput = {
  item?: ItemWhereUniqueInput | null;
  priceWithoutVat?: number | null;
  quantity?: number | null;
  transactionType?: "Service" | "Sale" | "ServiceAndSales" | null;
  vatRate?: number | null;
};
