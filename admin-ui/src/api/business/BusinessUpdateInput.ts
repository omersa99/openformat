import { AccountUpdateManyWithoutBusinessesInput } from "./AccountUpdateManyWithoutBusinessesInput";
import { ClientsAndSupplierUpdateManyWithoutBusinessesInput } from "./ClientsAndSupplierUpdateManyWithoutBusinessesInput";
import { DocumentUpdateManyWithoutBusinessesInput } from "./DocumentUpdateManyWithoutBusinessesInput";
import { ItemUpdateManyWithoutBusinessesInput } from "./ItemUpdateManyWithoutBusinessesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type BusinessUpdateInput = {
  accounts?: AccountUpdateManyWithoutBusinessesInput;
  bn?: number;
  clientsAndSuppliers?: ClientsAndSupplierUpdateManyWithoutBusinessesInput;
  documents?: DocumentUpdateManyWithoutBusinessesInput;
  items?: ItemUpdateManyWithoutBusinessesInput;
  owner?: UserWhereUniqueInput | null;
  settings?: SettingWhereUniqueInput | null;
};
