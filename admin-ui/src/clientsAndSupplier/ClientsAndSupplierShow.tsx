import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClientsAndSupplierShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label=" Address - City" source="addressCity" />
        <TextField label=" Address - Country" source="addressCountry" />
        <TextField label="Address House Number" source="addressHouseNumber" />
        <TextField label=" Address - Postal Code" source="addressPostalCode" />
        <TextField label="Address Street" source="addressStreet" />
        <TextField label="Business Number" source="businessNumber" />
        <TextField label="Country Code" source="countryCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
