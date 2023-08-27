import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  internalItemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  sortingCode?: StringNullableFilter;
  sortingCodeDescription?: StringNullableFilter;
  supplierManufacturerCodeInProcurement?: StringNullableFilter;
  unitOfMeasurementDescription?: StringNullableFilter;
  universalItemCode?: StringNullableFilter;
};
