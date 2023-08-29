import { BankbookWhereUniqueInput } from "../bankbook/BankbookWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  bankbooks?: BankbookWhereUniqueInput;
  data?: JsonFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
};
