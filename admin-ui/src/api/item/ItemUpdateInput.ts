import { InputJsonValue } from "../../types";

export type ItemUpdateInput = {
  data?: InputJsonValue;
  internalItemCode?: string | null;
  itemName?: string | null;
  sortingCode?: string | null;
  sortingCodeDescription?: string | null;
  supplierManufacturerCodeInProcurement?: string | null;
  unitOfMeasurementDescription?: string | null;
  universalItemCode?: string | null;
};
