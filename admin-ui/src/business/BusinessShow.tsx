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
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "../clientsAndSupplier/ClientsAndSupplierTitle";
import { BANKBOOK_TITLE_FIELD } from "../bankbook/BankbookTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="bankbooks"
          source="bankbook.id"
          reference="Bankbook"
        >
          <TextField source={BANKBOOK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Document"
          target="businessId"
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
