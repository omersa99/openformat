import { AccountUpdateManyWithoutBusinessesInput } from "./AccountUpdateManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  accounts?: AccountUpdateManyWithoutBusinessesInput;
  data?: InputJsonValue;
  documents?: DocumentUpdateManyWithoutBusinessesInput;
};
