import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
