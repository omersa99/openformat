import { JsonValue } from "type-fest";

export type Bankbook = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
