import { InputJsonValue } from "../../types";

export type TransactionCreateInput = {
  accountInTransaction?: string | null;
  actionAmount?: number | null;
  actionIndicator?: number | null;
  actionOperation?: string | null;
  counterAccount?: string | null;
  data?: InputJsonValue;
  date?: Date | null;
  details?: string | null;
  entryDate?: Date | null;
  foreignCurrencyAmount?: number | null;
  foreignCurrencyCode?: string | null;
  lineNumberInTransaction?: number | null;
  matchingField_1?: string | null;
  matchingField_2?: string | null;
  modifiedDate?: Date | null;
  portion?: number | null;
  reference?: string | null;
  reference_2?: string | null;
  referenceDocumentType?: number | null;
  referenceDocumentType_2?: number | null;
  transactionNumber?: number | null;
  transactionType?: string | null;
};
