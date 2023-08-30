import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { DocumentTitle } from "../document/DocumentTitle";
import { ItemTitle } from "../item/ItemTitle";

export const DocumentDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
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
    </Edit>
  );
};
