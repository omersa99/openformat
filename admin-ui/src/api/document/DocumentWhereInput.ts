import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
};
