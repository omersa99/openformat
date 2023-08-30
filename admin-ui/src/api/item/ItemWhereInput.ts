import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemWhereInput = {
  business?: BusinessWhereUniqueInput;
  data?: JsonFilter;
  documentDetails?: DocumentDetailListRelationFilter;
  id?: StringFilter;
  internalItemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  sortingCode?: StringNullableFilter;
  sortingCodeDescription?: StringNullableFilter;
  supplierManufacturerCodeInProcurement?: StringNullableFilter;
  unitOfMeasurementDescription?: StringNullableFilter;
  universalItemCode?: StringNullableFilter;
};
