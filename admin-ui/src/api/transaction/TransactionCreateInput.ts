import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TransactionCreateInput = {
  accountInTransaction?: AccountWhereUniqueInput | null;
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
  modifiedDate?: Date | null;
  portion?: number | null;
  reference?: string | null;
  reference_2?: string | null;
  transactionNumber?: number | null;
  transactionType?: string | null;
};
