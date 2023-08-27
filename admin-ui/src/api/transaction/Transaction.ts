import { JsonValue } from "type-fest";

export type Transaction = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
