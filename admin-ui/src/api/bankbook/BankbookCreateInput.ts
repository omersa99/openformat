import { AccountCreateNestedManyWithoutBankbooksInput } from "./AccountCreateNestedManyWithoutBankbooksInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BankbookCreateInput = {
  accounts?: AccountCreateNestedManyWithoutBankbooksInput;
  business?: BusinessWhereUniqueInput | null;
  data?: InputJsonValue;
};
