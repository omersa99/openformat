export type ItemTransaction = {
  createdAt: Date;
  id: string;
  inflows: number | null;
  internalItemCode: string | null;
  outflows: number | null;
  updatedAt: Date;
};
