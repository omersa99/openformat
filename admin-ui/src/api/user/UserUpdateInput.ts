import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  businesses?: BusinessWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
