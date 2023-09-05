import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const ReceiptDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account Number" source="accountNumber" />
        <NumberInput step={1} label="Bank Number" source="bankNumber" />
        <TextInput label="Branch Identifier" source="branchIdentifier" />
        <NumberInput step={1} label="Branch Number" source="branchNumber" />
        <NumberInput step={1} label="Check Number" source="checkNumber" />
        <NumberInput
          step={1}
          label="Credit Transaction Type"
          source="creditTransactionType"
        />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <TextInput label="Payee Company Code" source="payeeCompanyCode" />
        <DateInput
          label="Payment/Check Clearance Date"
          source="paymentCheckClearanceDate"
        />
        <div />
        <NumberInput step={1} label="payment type" source="paymentType" />
        <TextInput label="Swiped Card Name" source="swipedCardName" />
        <NumberInput label="total" source="total" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
