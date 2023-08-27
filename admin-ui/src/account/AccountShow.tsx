import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Accountant Classification Code"
          source="accountantClassificationCode"
        />
        <TextField
          label="Account Balance at Start of Segment"
          source="accountBalanceAtStartOfSegment"
        />
        <TextField
          label="Account Balance in Foreign Currency"
          source="accountBalanceInForeignCurrency"
        />
        <TextField label="Account Key" source="accountKey" />
        <TextField label="Account Name" source="accountName" />
        <TextField label="Center Account" source="centerAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Currency Code for Foreign Currency"
          source="currencyCodeForForeignCurrency"
        />
        <TextField label="Examined Balance Code" source="examinedBalanceCode" />
        <TextField
          label="Examined Balance Code Description"
          source="examinedBalanceCodeDescription"
        />
        <TextField label="ID" source="id" />
        <TextField label="Total Credit" source="totalCredit" />
        <TextField label="Total Debit" source="totalDebit" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
