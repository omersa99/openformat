import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { ItemTitle } from "../item/ItemTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const DocumentDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
        <NumberInput label="Price without VAT" source="priceWithoutVat" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Transaction Type" source="transactionType" />
        <NumberInput step={1} label="VAT Rate" source="vatRate" />
      </SimpleForm>
    </Create>
  );
};
