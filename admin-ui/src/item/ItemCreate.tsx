import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Internal Item Code" source="internalItemCode" />
        <TextInput label="Item Name" source="itemName" />
        <TextInput label="Sorting Code" source="sortingCode" />
        <TextInput
          label="Sorting Code Description"
          multiline
          source="sortingCodeDescription"
        />
        <TextInput
          label="Supplier/Manufacturer Code (in Procurement)"
          source="supplierManufacturerCodeInProcurement"
        />
        <TextInput
          label="Unit of Measurement Description"
          multiline
          source="unitOfMeasurementDescription"
        />
        <TextInput label="Universal Item Code" source="universalItemCode" />
      </SimpleForm>
    </Create>
  );
};
