import { JsonValue } from "type-fest";
import { Business } from "../business/Business";

export type Setting = {
  accountingSettings: JsonValue;
  business?: Business | null;
  businessSettings: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
