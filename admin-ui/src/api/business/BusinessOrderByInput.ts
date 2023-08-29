import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
