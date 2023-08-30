import { AccountUpdateManyWithoutBusinessesInput } from "./AccountUpdateManyWithoutBusinessesInput";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type BusinessUpdateInput = {
  accounts?: AccountUpdateManyWithoutBusinessesInput;
  documents?: DocumentUpdateManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
  settings?: SettingWhereUniqueInput | null;
};
