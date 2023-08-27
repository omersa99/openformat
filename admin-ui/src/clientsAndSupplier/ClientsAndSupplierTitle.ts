import { ClientsAndSupplier as TClientsAndSupplier } from "../api/clientsAndSupplier/ClientsAndSupplier";

export const CLIENTSANDSUPPLIER_TITLE_FIELD = "id";

export const ClientsAndSupplierTitle = (
  record: TClientsAndSupplier
): string => {
  return record.id || String(record.id);
};
