import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { DocumentDetailTitle } from "../documentDetail/DocumentDetailTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <div />
        <ReferenceArrayInput
          source="documentDetails"
          reference="DocumentDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Internal Item Code" source="internalItemCode" />
        <TextInput label="Item Name" source="itemName" />
        <NumberInput step={1} label="opening balance" source="openingBalance" />
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
