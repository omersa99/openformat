import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

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
        <ReferenceField
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceManyField
          reference="Transaction"
          target="accountInTransactionId"
          label="transactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account in Transaction"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Action Amount" source="actionAmount" />
            <TextField label="Action Indicator" source="actionIndicator" />
            <TextField label="Action Operation" source="actionOperation" />
            <TextField label="Counter Account" source="counterAccount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="Date" source="date" />
            <TextField label="Details" source="details" />
            <TextField label="Entry Date" source="entryDate" />
            <TextField
              label="Foreign Currency Amount"
              source="foreignCurrencyAmount"
            />
            <TextField
              label="Foreign Currency Code"
              source="foreignCurrencyCode"
            />
            <TextField label="ID" source="id" />
            <TextField
              label="Line Number in Transaction"
              source="lineNumberInTransaction"
            />
            <TextField label="Matching Field 1" source="matchingField_1" />
            <TextField label="Matching Field 2" source="matchingField_2" />
            <TextField label="Modified Date" source="modifiedDate" />
            <TextField label="Portion" source="portion" />
            <TextField label="Reference" source="reference" />
            <TextField label="Reference 2" source="reference_2" />
            <TextField
              label="Reference Document Type"
              source="referenceDocumentType"
            />
            <TextField
              label="Reference Document Type 2"
              source="referenceDocumentType_2"
            />
            <TextField label="Transaction Number" source="transactionNumber" />
            <TextField label="Transaction Type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
