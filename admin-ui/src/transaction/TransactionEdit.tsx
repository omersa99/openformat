import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  DateInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { DocumentDetailTitle } from "../documentDetail/DocumentDetailTitle";
import { ReceiptDetailTitle } from "../receiptDetail/ReceiptDetailTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountInTransaction.id"
          reference="Account"
          label="Account in Transaction"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="Action Amount" source="actionAmount" />
        <NumberInput
          step={1}
          label="Action Indicator"
          source="actionIndicator"
        />
        <TextInput label="Action Operation" source="actionOperation" />
        <TextInput label="Counter Account" source="counterAccount" />
        <div />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Details" source="details" />
        <ReferenceInput
          source="documentDetail.id"
          reference="DocumentDetail"
          label="document details"
        >
          <SelectInput optionText={DocumentDetailTitle} />
        </ReferenceInput>
        <DateInput label="Entry Date" source="entryDate" />
        <NumberInput
          step={1}
          label="Foreign Currency Amount"
          source="foreignCurrencyAmount"
        />
        <TextInput label="Foreign Currency Code" source="foreignCurrencyCode" />
        <NumberInput
          step={1}
          label="Line Number in Transaction"
          source="lineNumberInTransaction"
        />
        <DateTimeInput label="Modified Date" source="modifiedDate" />
        <NumberInput step={1} label="Portion" source="portion" />
        <ReferenceInput
          source="receiptDetail.id"
          reference="ReceiptDetail"
          label="receipt details"
        >
          <SelectInput optionText={ReceiptDetailTitle} />
        </ReferenceInput>
        <TextInput label="Reference" source="reference" />
        <TextInput label="Reference 2" source="reference_2" />
        <NumberInput
          step={1}
          label="Transaction Number"
          source="transactionNumber"
        />
        <TextInput label="Transaction Type" source="transactionType" />
      </SimpleForm>
    </Edit>
  );
};
