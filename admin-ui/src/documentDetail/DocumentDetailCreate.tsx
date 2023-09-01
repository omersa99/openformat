import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";

export const DocumentDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Price without VAT"
          source="priceWithoutVat"
        />
        <NumberInput step={1} label="quantity" source="quantity" />
        <SelectInput
          source="transactionType"
          label="Transaction Type"
          choices={[
            { label: "service", value: "Service" },
            { label: "sale", value: "Sale" },
            { label: "Service and sales", value: "ServiceAndSales" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="VAT Rate" source="vatRate" />
      </SimpleForm>
    </Create>
  );
};
