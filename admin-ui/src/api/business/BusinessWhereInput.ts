import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type BusinessWhereInput = {
  accounts?: AccountListRelationFilter;
  bn?: IntFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  owner?: UserWhereUniqueInput;
  settings?: SettingWhereUniqueInput;
};
