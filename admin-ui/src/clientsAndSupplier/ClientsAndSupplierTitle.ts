import { ClientsAndSupplier as TClientsAndSupplier } from "../api/clientsAndSupplier/ClientsAndSupplier";

export const CLIENTSANDSUPPLIER_TITLE_FIELD = "name";

export const ClientsAndSupplierTitle = (
  record: TClientsAndSupplier
): string => {
  return record.name || String(record.id);
};
