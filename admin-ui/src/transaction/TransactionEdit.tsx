import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateInput,
  DateTimeInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Account in Transaction"
          source="accountInTransaction"
        />
        <NumberInput step={1} label="Action Amount" source="actionAmount" />
        <NumberInput
          step={1}
          label="Action Indicator"
          source="actionIndicator"
        />
        <TextInput label="Action Operation" source="actionOperation" />
        <TextInput label="Counter Account" source="counterAccount" />
        <div />
        <DateInput label="Date" source="date" />
        <TextInput label="Details" source="details" />
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
        <TextInput label="Matching Field 1" source="matchingField_1" />
        <TextInput label="Matching Field 2" source="matchingField_2" />
        <DateTimeInput label="Modified Date" source="modifiedDate" />
        <NumberInput step={1} label="Portion" source="portion" />
        <TextInput label="Reference" source="reference" />
        <TextInput label="Reference 2" source="reference_2" />
        <NumberInput
          step={1}
          label="Reference Document Type"
          source="referenceDocumentType"
        />
        <NumberInput
          step={1}
          label="Reference Document Type 2"
          source="referenceDocumentType_2"
        />
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
