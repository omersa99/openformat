import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ItemTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Inflows" source="inflows" />
        <TextInput label="Internal Item Code" source="internalItemCode" />
        <NumberInput step={1} label="Outflows" source="outflows" />
      </SimpleForm>
    </Edit>
  );
};
