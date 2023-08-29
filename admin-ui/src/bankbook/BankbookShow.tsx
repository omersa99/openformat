import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BANKBOOK_TITLE_FIELD } from "./BankbookTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

export const BankbookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="bankbookId"
          label="accounts"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="bankbook"
              source="bankbook.id"
              reference="Bankbook"
            >
              <TextField source={BANKBOOK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Center Account" source="centerAccount" />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Currency Code for Foreign Currency"
              source="currencyCodeForForeignCurrency"
            />
            <TextField
              label="Examined Balance Code"
              source="examinedBalanceCode"
            />
            <TextField
              label="Examined Balance Code Description"
              source="examinedBalanceCodeDescription"
            />
            <TextField label="ID" source="id" />
            <TextField label="Total Credit" source="totalCredit" />
            <TextField label="Total Debit" source="totalDebit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
