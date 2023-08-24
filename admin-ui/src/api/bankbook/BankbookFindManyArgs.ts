import { BankbookWhereInput } from "./BankbookWhereInput";
import { BankbookOrderByInput } from "./BankbookOrderByInput";

export type BankbookFindManyArgs = {
  where?: BankbookWhereInput;
  orderBy?: Array<BankbookOrderByInput>;
  skip?: number;
  take?: number;
};
