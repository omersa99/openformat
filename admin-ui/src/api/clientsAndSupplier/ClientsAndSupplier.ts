import { Account } from "../account/Account";
import { Document } from "../document/Document";

export type ClientsAndSupplier = {
  account?: Account | null;
  addressCity: string | null;
  addressCountry: string | null;
  addressHouseNumber: string | null;
  addressPostalCode: string | null;
  addressStreet: string | null;
  businessNumber: string | null;
  countryCode: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  updatedAt: Date;
};
