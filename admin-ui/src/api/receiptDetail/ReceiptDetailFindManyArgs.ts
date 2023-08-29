import { ReceiptDetailWhereInput } from "./ReceiptDetailWhereInput";
import { ReceiptDetailOrderByInput } from "./ReceiptDetailOrderByInput";

export type ReceiptDetailFindManyArgs = {
  where?: ReceiptDetailWhereInput;
  orderBy?: Array<ReceiptDetailOrderByInput>;
  skip?: number;
  take?: number;
};
