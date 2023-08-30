import { InputJsonValue } from "../../types";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type SettingCreateInput = {
  accountingSettings?: InputJsonValue;
  business?: BusinessWhereUniqueInput | null;
  businessSettings?: InputJsonValue;
};
