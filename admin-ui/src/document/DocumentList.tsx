import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "../clientsAndSupplier/ClientsAndSupplierTitle";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"documents"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
