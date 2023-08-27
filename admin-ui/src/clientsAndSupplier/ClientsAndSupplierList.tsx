import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientsAndSupplierList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"clients and suppliers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label=" Address - City" source="addressCity" />
        <TextField label=" Address - Country" source="addressCountry" />
        <TextField label="Address House Number" source="addressHouseNumber" />
        <TextField label=" Address - Postal Code" source="addressPostalCode" />
        <TextField label="Address Street" source="addressStreet" />
        <TextField label="Business Number" source="businessNumber" />
        <TextField label="Country Code" source="countryCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
