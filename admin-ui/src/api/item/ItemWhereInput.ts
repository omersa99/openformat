import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
};
