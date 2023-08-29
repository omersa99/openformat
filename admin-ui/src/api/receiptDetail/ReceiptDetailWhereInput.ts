import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ReceiptDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
};
