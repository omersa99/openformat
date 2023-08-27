import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  internalItemCode?: SortOrder;
  itemName?: SortOrder;
  sortingCode?: SortOrder;
  sortingCodeDescription?: SortOrder;
  supplierManufacturerCodeInProcurement?: SortOrder;
  unitOfMeasurementDescription?: SortOrder;
  universalItemCode?: SortOrder;
  updatedAt?: SortOrder;
};
