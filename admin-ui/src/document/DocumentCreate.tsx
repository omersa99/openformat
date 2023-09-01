import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { ClientsAndSupplierTitle } from "../clientsAndSupplier/ClientsAndSupplierTitle";
import { ReceiptDetailTitle } from "../receiptDetail/ReceiptDetailTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput
          source="clientSupplier.id"
          reference="ClientsAndSupplier"
          label="clientSupplier"
        >
          <SelectInput optionText={ClientsAndSupplierTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Document Type" source="documentType" />
        <div />
        <ReferenceArrayInput
          source="receiptDetails"
          reference="ReceiptDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReceiptDetailTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
