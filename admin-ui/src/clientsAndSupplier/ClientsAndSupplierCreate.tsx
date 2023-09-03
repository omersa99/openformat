import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { BusinessTitle } from "../business/BusinessTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const ClientsAndSupplierCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label=" Address - City" source="addressCity" />
        <TextInput label=" Address - Country" source="addressCountry" />
        <TextInput label="Address House Number" source="addressHouseNumber" />
        <TextInput label=" Address - Postal Code" source="addressPostalCode" />
        <TextInput label="Address Street" source="addressStreet" />
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <TextInput label="Business Number" source="businessNumber" />
        <TextInput label="Country Code" source="countryCode" />
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
