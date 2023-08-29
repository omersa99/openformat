import { BankbookWhereUniqueInput } from "../bankbook/BankbookWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  bankbooks?: BankbookWhereUniqueInput | null;
  data?: InputJsonValue;
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;
};
