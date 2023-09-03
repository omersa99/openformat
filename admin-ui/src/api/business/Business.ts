import { Account } from "../account/Account";
import { ClientsAndSupplier } from "../clientsAndSupplier/ClientsAndSupplier";
import { Document } from "../document/Document";
import { Item } from "../item/Item";
import { User } from "../user/User";
import { Setting } from "../setting/Setting";

export type Business = {
  accounts?: Array<Account>;
  bn: number;
  clientsAndSuppliers?: Array<ClientsAndSupplier>;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  items?: Array<Item>;
  owner?: User | null;
  settings?: Setting | null;
  updatedAt: Date;
};
