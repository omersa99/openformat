import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { DOCUMENTDETAIL_TITLE_FIELD } from "../documentDetail/DocumentDetailTitle";
import { RECEIPTDETAIL_TITLE_FIELD } from "./ReceiptDetailTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const ReceiptDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Number" source="accountNumber" />
        <TextField label="Bank Number" source="bankNumber" />
        <TextField label="Branch Identifier" source="branchIdentifier" />
        <TextField label="Branch Number" source="branchNumber" />
        <TextField label="Check Number" source="checkNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Credit Transaction Type"
          source="creditTransactionType"
        />
        <ReferenceField
          label="document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Payee Company Code" source="payeeCompanyCode" />
        <TextField
          label="Payment/Check Clearance Date"
          source="paymentCheckClearanceDate"
        />
        <TextField label="payment data" source="paymentData" />
        <TextField label="payment type" source="paymentType" />
        <TextField label="Swiped Card Name" source="swipedCardName" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="receiptDetailId"
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
            <ReferenceField
              label="document details"
              source="documentdetail.id"
              reference="DocumentDetail"
            >
              <TextField source={DOCUMENTDETAIL_TITLE_FIELD} />
            </ReferenceField>
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
            <TextField label="Modified Date" source="modifiedDate" />
            <TextField label="Portion" source="portion" />
            <ReferenceField
              label="receipt details"
              source="receiptdetail.id"
              reference="ReceiptDetail"
            >
              <TextField source={RECEIPTDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reference" source="reference" />
            <TextField label="Reference 2" source="reference_2" />
            <TextField label="Transaction Number" source="transactionNumber" />
            <TextField label="Transaction Type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
