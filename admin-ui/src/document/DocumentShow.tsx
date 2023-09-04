import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "./DocumentTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "../clientsAndSupplier/ClientsAndSupplierTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DocumentDetail"
          target="documentId"
          label="document details"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="discount amount" source="discountAmount" />
            <ReferenceField
              label="document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price without VAT" source="priceWithoutVat" />
            <TextField label="quantity" source="quantity" />
            <TextField label="Transaction Type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="VAT Rate" source="vatRate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReceiptDetail"
          target="documentId"
          label="receipt details"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField
              label="Payment/Check Clearance Date"
              source="paymentCheckClearanceDate"
            />
            <TextField label="payment data" source="paymentData" />
            <TextField label="payment type" source="paymentType" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
