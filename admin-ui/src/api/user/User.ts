import { Business } from "../business/Business";
import { JsonValue } from "type-fest";

export type User = {
  businesses?: Business | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
