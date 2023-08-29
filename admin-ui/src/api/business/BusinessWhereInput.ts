import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  accounts?: AccountListRelationFilter;
  data?: JsonFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
};
