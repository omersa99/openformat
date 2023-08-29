import { AccountUpdateManyWithoutBankbooksInput } from "./AccountUpdateManyWithoutBankbooksInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BankbookUpdateInput = {
  accounts?: AccountUpdateManyWithoutBankbooksInput;
  business?: BusinessWhereUniqueInput | null;
  data?: InputJsonValue;
};
