import { Account } from "../account/Account";
import { Business } from "../business/Business";
import { JsonValue } from "type-fest";

export type Bankbook = {
  accounts?: Array<Account>;
  business?: Business | null;
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
