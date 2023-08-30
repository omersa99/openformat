import { JsonFilter } from "../../util/JsonFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SettingWhereInput = {
  accountingSettings?: JsonFilter;
  business?: BusinessWhereUniqueInput;
  businessSettings?: JsonFilter;
  id?: StringFilter;
};
