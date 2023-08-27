import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientsAndSupplierCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label=" Address - City" source="addressCity" />
        <TextInput label=" Address - Country" source="addressCountry" />
        <TextInput label="Address House Number" source="addressHouseNumber" />
        <TextInput label=" Address - Postal Code" source="addressPostalCode" />
        <TextInput label="Address Street" source="addressStreet" />
        <TextInput label="Business Number" source="businessNumber" />
        <TextInput label="Country Code" source="countryCode" />
      </SimpleForm>
    </Create>
  );
};
