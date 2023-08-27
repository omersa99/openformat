import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemTransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"item transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Inflows" source="inflows" />
        <TextField label="Internal Item Code" source="internalItemCode" />
        <TextField label="Outflows" source="outflows" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
