import { AccountCreateNestedManyWithoutBusinessesInput } from "./AccountCreateNestedManyWithoutBusinessesInput";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";
import { ItemCreateNestedManyWithoutBusinessesInput } from "./ItemCreateNestedManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type BusinessCreateInput = {
  accounts?: AccountCreateNestedManyWithoutBusinessesInput;
  bn: number;
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;
  items?: ItemCreateNestedManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
  settings?: SettingWhereUniqueInput | null;
};
