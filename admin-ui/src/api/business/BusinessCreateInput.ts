import { AccountCreateNestedManyWithoutBusinessesInput } from "./AccountCreateNestedManyWithoutBusinessesInput";
import { DocumentCreateNestedManyWithoutBusinessesInput } from "./DocumentCreateNestedManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type BusinessCreateInput = {
  accounts?: AccountCreateNestedManyWithoutBusinessesInput;
  documents?: DocumentCreateNestedManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
  settings?: SettingWhereUniqueInput | null;
};
