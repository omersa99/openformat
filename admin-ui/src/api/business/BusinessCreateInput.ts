import { AccountCreateNestedManyWithoutBusinessesInput } from "./AccountCreateNestedManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  accounts?: AccountCreateNestedManyWithoutBusinessesInput;
  data?: InputJsonValue;
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;
};
