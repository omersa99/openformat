import { Business } from "../business/Business";
import { JsonValue } from "type-fest";
import { DocumentDetail } from "../documentDetail/DocumentDetail";

export type Item = {
  business?: Business | null;
  createdAt: Date;
  data: JsonValue;
  documentDetails?: Array<DocumentDetail>;
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
