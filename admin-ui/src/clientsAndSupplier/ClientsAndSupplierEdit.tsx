import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientsAndSupplierEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label=" Address - City" source="addressCity" />
        <TextInput label=" Address - Country" source="addressCountry" />
        <TextInput label="Address House Number" source="addressHouseNumber" />
        <TextInput label=" Address - Postal Code" source="addressPostalCode" />
        <TextInput label="Address Street" source="addressStreet" />
        <TextInput label="Business Number" source="businessNumber" />
        <TextInput label="Country Code" source="countryCode" />
      </SimpleForm>
    </Edit>
  );
};
