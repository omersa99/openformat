import { JsonValue } from "type-fest";

export type Account = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
