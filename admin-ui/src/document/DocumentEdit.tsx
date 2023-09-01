import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { ClientsAndSupplierTitle } from "../clientsAndSupplier/ClientsAndSupplierTitle";
import { DocumentDetailTitle } from "../documentDetail/DocumentDetailTitle";
import { ReceiptDetailTitle } from "../receiptDetail/ReceiptDetailTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="documentDetails"
          reference="DocumentDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentDetailTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Document Type" source="documentType" />
        <TextInput label="fds" source="fds" />
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
    </Edit>
  );
};
