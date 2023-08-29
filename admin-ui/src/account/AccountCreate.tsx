import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

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
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
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
        <ReferenceArrayInput
          source="transaction"
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
