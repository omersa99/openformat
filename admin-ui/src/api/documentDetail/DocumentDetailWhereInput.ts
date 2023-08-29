import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DocumentDetailWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
};
