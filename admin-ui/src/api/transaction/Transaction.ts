import { JsonValue } from "type-fest";

export type Transaction = {
  accountInTransaction: string | null;
  actionAmount: number | null;
  actionIndicator: number | null;
  actionOperation: string | null;
  counterAccount: string | null;
  createdAt: Date;
  data: JsonValue;
  date: Date | null;
  details: string | null;
  entryDate: Date | null;
  foreignCurrencyAmount: number | null;
  foreignCurrencyCode: string | null;
  id: string;
  lineNumberInTransaction: number | null;
  matchingField_1: string | null;
  matchingField_2: string | null;
  modifiedDate: Date | null;
  portion: number | null;
  reference: string | null;
  reference_2: string | null;
  referenceDocumentType: number | null;
  referenceDocumentType_2: number | null;
  transactionNumber: number | null;
  transactionType: string | null;
  updatedAt: Date;
};
