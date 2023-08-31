import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DocumentCreateNestedManyWithoutClientsAndSuppliersInput } from "./DocumentCreateNestedManyWithoutClientsAndSuppliersInput";

export type ClientsAndSupplierCreateInput = {
  account?: AccountWhereUniqueInput | null;
  addressCity?: string | null;
  addressCountry?: string | null;
  addressHouseNumber?: string | null;
  addressPostalCode?: string | null;
  addressStreet?: string | null;
  businessNumber?: string | null;
  countryCode?: string | null;
  documents?: DocumentCreateNestedManyWithoutClientsAndSuppliersInput;
  name?: string | null;
};
