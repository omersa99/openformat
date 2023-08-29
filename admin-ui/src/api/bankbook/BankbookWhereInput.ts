import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankbookWhereInput = {
  accounts?: AccountListRelationFilter;
  business?: BusinessWhereUniqueInput;
  data?: JsonFilter;
  id?: StringFilter;
};
