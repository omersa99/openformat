import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { DOCUMENTDETAIL_TITLE_FIELD } from "../documentDetail/DocumentDetailTitle";
import { RECEIPTDETAIL_TITLE_FIELD } from "../receiptDetail/ReceiptDetailTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"transactions"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Foreign Currency Code" source="foreignCurrencyCode" />
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
    </List>
  );
};
