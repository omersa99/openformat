import { JsonValue } from "type-fest";

export type Item = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  internalItemCode: string | null;
  itemName: string | null;
  sortingCode: string | null;
  sortingCodeDescription: string | null;
  supplierManufacturerCodeInProcurement: string | null;
  unitOfMeasurementDescription: string | null;
  universalItemCode: string | null;
  updatedAt: Date;
};
