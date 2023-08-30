import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  settingsId?: SortOrder;
  updatedAt?: SortOrder;
};
