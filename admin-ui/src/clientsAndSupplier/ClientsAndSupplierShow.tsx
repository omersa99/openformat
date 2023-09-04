import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "./ClientsAndSupplierTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const ClientsAndSupplierShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label=" Address - City" source="addressCity" />
        <TextField label=" Address - Country" source="addressCountry" />
        <TextField label="Address House Number" source="addressHouseNumber" />
        <TextField label=" Address - Postal Code" source="addressPostalCode" />
        <TextField label="Address Street" source="addressStreet" />
        <ReferenceField
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Business Number" source="businessNumber" />
        <TextField label="Country Code" source="countryCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
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
            <BooleanField label="Canceled Document" source="canceledDocument" />
            <ReferenceField
              label="clientSupplier"
              source="clientsandsupplier.id"
              reference="ClientsAndSupplier"
            >
              <TextField source={CLIENTSANDSUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deduction Amount" source="deductionAmount" />
            <TextField label="Document Date" source="documentDate" />
            <TextField label="Document Number" source="documentNumber" />
            <TextField label="Document Type" source="documentType" />
            <TextField label="ID" source="id" />
            <TextField label="linked Document Ids" source="linkedDocumentIds" />
            <TextField label="Modified Date" source="modifiedDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
