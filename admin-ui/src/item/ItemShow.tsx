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

import { ITEM_TITLE_FIELD } from "./ItemTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Internal Item Code" source="internalItemCode" />
        <TextField label="Item Name" source="itemName" />
        <TextField label="Sorting Code" source="sortingCode" />
        <TextField
          label="Sorting Code Description"
          source="sortingCodeDescription"
        />
        <TextField
          label="Supplier/Manufacturer Code (in Procurement)"
          source="supplierManufacturerCodeInProcurement"
        />
        <TextField
          label="Unit of Measurement Description"
          source="unitOfMeasurementDescription"
        />
        <TextField label="Universal Item Code" source="universalItemCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DocumentDetail"
          target="itemId"
          label="document details"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
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
      </SimpleShowLayout>
    </Show>
  );
};
