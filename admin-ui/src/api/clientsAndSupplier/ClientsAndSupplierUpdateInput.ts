import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { DocumentUpdateManyWithoutClientsAndSuppliersInput } from "./DocumentUpdateManyWithoutClientsAndSuppliersInput";

export type ClientsAndSupplierUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  addressCity?: string | null;
  addressCountry?: string | null;
  addressHouseNumber?: string | null;
  addressPostalCode?: string | null;
  addressStreet?: string | null;
  business?: BusinessWhereUniqueInput | null;
  businessNumber?: string | null;
  countryCode?: string | null;
  documents?: DocumentUpdateManyWithoutClientsAndSuppliersInput;
  name?: string | null;
};
