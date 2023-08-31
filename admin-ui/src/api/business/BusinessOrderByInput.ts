import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  bn?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  settingsId?: SortOrder;
  updatedAt?: SortOrder;
};
