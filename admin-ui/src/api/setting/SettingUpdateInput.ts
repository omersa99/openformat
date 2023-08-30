import { InputJsonValue } from "../../types";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type SettingUpdateInput = {
  accountingSettings?: InputJsonValue;
  business?: BusinessWhereUniqueInput | null;
  businessSettings?: InputJsonValue;
};
