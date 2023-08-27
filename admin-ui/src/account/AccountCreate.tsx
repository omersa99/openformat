import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Accountant Classification Code"
          source="accountantClassificationCode"
        />
        <NumberInput
          step={1}
          label="Account Balance at Start of Segment"
          source="accountBalanceAtStartOfSegment"
        />
        <NumberInput
          step={1}
          label="Account Balance in Foreign Currency"
          source="accountBalanceInForeignCurrency"
        />
        <TextInput label="Account Key" source="accountKey" />
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Center Account" source="centerAccount" />
        <TextInput
          label="Currency Code for Foreign Currency"
          source="currencyCodeForForeignCurrency"
        />
        <TextInput label="Examined Balance Code" source="examinedBalanceCode" />
        <TextInput
          label="Examined Balance Code Description"
          source="examinedBalanceCodeDescription"
        />
        <NumberInput step={1} label="Total Credit" source="totalCredit" />
        <NumberInput step={1} label="Total Debit" source="totalDebit" />
      </SimpleForm>
    </Create>
  );
};
