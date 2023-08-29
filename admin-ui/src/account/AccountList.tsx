import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BANKBOOK_TITLE_FIELD } from "../bankbook/BankbookTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"accounts"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Examined Balance Code" source="examinedBalanceCode" />
        <TextField
          label="Examined Balance Code Description"
          source="examinedBalanceCodeDescription"
        />
        <TextField label="ID" source="id" />
        <TextField label="Total Credit" source="totalCredit" />
        <TextField label="Total Debit" source="totalDebit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
