import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DocumentDetailUpdateManyWithoutItemsInput } from "./DocumentDetailUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  data?: InputJsonValue;
  documentDetails?: DocumentDetailUpdateManyWithoutItemsInput;
  internalItemCode?: string | null;
  itemName?: string | null;
  openingBalance?: number | null;
  sortingCode?: string | null;
  sortingCodeDescription?: string | null;
  supplierManufacturerCodeInProcurement?: string | null;
  unitOfMeasurementDescription?: string | null;
  universalItemCode?: string | null;
};
