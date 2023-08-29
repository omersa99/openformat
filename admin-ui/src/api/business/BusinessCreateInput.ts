import { AccountCreateNestedManyWithoutBusinessesInput } from "./AccountCreateNestedManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BusinessCreateInput = {
  accounts?: AccountCreateNestedManyWithoutBusinessesInput;
  data?: InputJsonValue;
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
};
