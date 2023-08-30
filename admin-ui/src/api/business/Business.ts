import { Account } from "../account/Account";
import { Document } from "../document/Document";
import { User } from "../user/User";
import { Setting } from "../setting/Setting";

export type Business = {
  accounts?: Array<Account>;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  owner?: User | null;
  settings?: Setting | null;
  updatedAt: Date;
};
