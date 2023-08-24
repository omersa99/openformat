import { JsonValue } from "type-fest";

export type Business = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
