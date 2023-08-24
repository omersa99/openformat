import { Bankbook as TBankbook } from "../api/bankbook/Bankbook";

export const BANKBOOK_TITLE_FIELD = "id";

export const BankbookTitle = (record: TBankbook): string => {
  return record.id || String(record.id);
};
