import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "./ClientsAndSupplierTitle";

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
        <ReferenceManyField
          reference="Document"
          target="clientSupplierId"
          label="documents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="clientSupplier"
              source="clientsandsupplier.id"
              reference="ClientsAndSupplier"
            >
              <TextField source={CLIENTSANDSUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
