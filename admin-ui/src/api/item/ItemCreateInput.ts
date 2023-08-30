import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DocumentDetailCreateNestedManyWithoutItemsInput } from "./DocumentDetailCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  data?: InputJsonValue;
  documentDetails?: DocumentDetailCreateNestedManyWithoutItemsInput;
  internalItemCode?: string | null;
  itemName?: string | null;
  sortingCode?: string | null;
  sortingCodeDescription?: string | null;
  supplierManufacturerCodeInProcurement?: string | null;
  unitOfMeasurementDescription?: string | null;
  universalItemCode?: string | null;
};
