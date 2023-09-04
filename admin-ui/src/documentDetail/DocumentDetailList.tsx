import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const DocumentDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"document details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="discount amount" source="discountAmount" />
        <ReferenceField
          label="document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price without VAT" source="priceWithoutVat" />
        <TextField label="quantity" source="quantity" />
        <TextField label="Transaction Type" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VAT Rate" source="vatRate" />
      </Datagrid>
    </List>
  );
};
