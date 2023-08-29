import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type Business = {
  accounts?: Array<Account>;
  createdAt: Date;
  data: JsonValue;
  documents?: Array<Document>;
  id: string;
  updatedAt: Date;
};
