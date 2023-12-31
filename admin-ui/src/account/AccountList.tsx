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
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "../clientsAndSupplier/ClientsAndSupplierTitle";

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
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Center Account" source="centerAccount" />
        <ReferenceField
          label="clients and suppliers"
          source="clientsandsupplier.id"
          reference="ClientsAndSupplier"
        >
          <TextField source={CLIENTSANDSUPPLIER_TITLE_FIELD} />
        </ReferenceField>
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
