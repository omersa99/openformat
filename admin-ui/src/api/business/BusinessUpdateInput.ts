import { BankbookWhereUniqueInput } from "../bankbook/BankbookWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  bankbooks?: BankbookWhereUniqueInput | null;
  data?: InputJsonValue;
  documents?: DocumentUpdateManyWithoutBusinessesInput;
};
