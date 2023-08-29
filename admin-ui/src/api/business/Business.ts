import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { Document } from "../document/Document";
import { User } from "../user/User";

export type Business = {
  accounts?: Array<Account>;
  createdAt: Date;
  data: JsonValue;
  documents?: Array<Document>;
  id: string;
  owner?: User | null;
  updatedAt: Date;
};
