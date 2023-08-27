import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
