import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DocumentDetailListRelationFilter } from "../documentDetail/DocumentDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  business?: BusinessWhereUniqueInput;
  data?: JsonFilter;
  documentDetails?: DocumentDetailListRelationFilter;
  id?: StringFilter;
  internalItemCode?: StringNullableFilter;
  itemName?: StringNullableFilter;
  openingBalance?: IntNullableFilter;
  sortingCode?: StringNullableFilter;
  sortingCodeDescription?: StringNullableFilter;
  supplierManufacturerCodeInProcurement?: StringNullableFilter;
  unitOfMeasurementDescription?: StringNullableFilter;
  universalItemCode?: StringNullableFilter;
};
