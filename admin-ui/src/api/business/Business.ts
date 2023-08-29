import { Bankbook } from "../bankbook/Bankbook";
import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type Business = {
  bankbooks?: Bankbook | null;
  createdAt: Date;
  data: JsonValue;
  documents?: Array<Document>;
  id: string;
  updatedAt: Date;
};
