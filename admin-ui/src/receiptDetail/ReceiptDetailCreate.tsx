import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DocumentTitle } from "../document/DocumentTitle";

export const ReceiptDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
