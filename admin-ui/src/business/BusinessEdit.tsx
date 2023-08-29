import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BankbookTitle } from "../bankbook/BankbookTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bankbooks.id"
          reference="Bankbook"
          label="bankbooks"
        >
          <SelectInput optionText={BankbookTitle} />
        </ReferenceInput>
        <div />
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
