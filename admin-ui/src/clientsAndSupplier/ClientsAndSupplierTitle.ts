import { ClientsAndSupplier as TClientsAndSupplier } from "../api/clientsAndSupplier/ClientsAndSupplier";

export const CLIENTSANDSUPPLIER_TITLE_FIELD = "addressCity";

export const ClientsAndSupplierTitle = (
  record: TClientsAndSupplier
): string => {
  return record.addressCity || String(record.id);
};
