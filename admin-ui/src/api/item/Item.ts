import { JsonValue } from "type-fest";

export type Item = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
