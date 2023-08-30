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

export const SettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"settings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accounting settings" source="accountingSettings" />
        <ReferenceField
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="business settings" source="businessSettings" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
