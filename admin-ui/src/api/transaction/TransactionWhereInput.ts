import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
};
