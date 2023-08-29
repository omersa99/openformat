import { AccountUpdateManyWithoutBusinessesInput } from "./AccountUpdateManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BusinessUpdateInput = {
  accounts?: AccountUpdateManyWithoutBusinessesInput;
  data?: InputJsonValue;
  documents?: DocumentUpdateManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
};
