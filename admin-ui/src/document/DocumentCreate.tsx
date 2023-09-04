import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { ClientsAndSupplierTitle } from "../clientsAndSupplier/ClientsAndSupplierTitle";
import { DocumentDetailTitle } from "../documentDetail/DocumentDetailTitle";
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
        <BooleanInput label="Canceled Document" source="canceledDocument" />
        <ReferenceInput
          source="clientSupplier.id"
          reference="ClientsAndSupplier"
          label="clientSupplier"
        >
          <SelectInput optionText={ClientsAndSupplierTitle} />
        </ReferenceInput>
        <NumberInput label="Deduction Amount" source="deductionAmount" />
        <DateTimeInput label="Document Date" source="documentDate" />
        <ReferenceArrayInput
          source="documentDetails"
          reference="DocumentDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentDetailTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Document Number" source="documentNumber" />
        <NumberInput step={1} label="Document Type" source="documentType" />
        <TextInput label="linked Document Ids" source="linkedDocumentIds" />
        <DateTimeInput label="Modified Date" source="modifiedDate" />
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
