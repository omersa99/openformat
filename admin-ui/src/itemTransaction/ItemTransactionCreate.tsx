import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ItemTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Inflows" source="inflows" />
        <TextInput label="Internal Item Code" source="internalItemCode" />
        <NumberInput step={1} label="Outflows" source="outflows" />
      </SimpleForm>
    </Create>
  );
};
