import { ItemTransactionWhereInput } from "./ItemTransactionWhereInput";
import { ItemTransactionOrderByInput } from "./ItemTransactionOrderByInput";

export type ItemTransactionFindManyArgs = {
  where?: ItemTransactionWhereInput;
  orderBy?: Array<ItemTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
