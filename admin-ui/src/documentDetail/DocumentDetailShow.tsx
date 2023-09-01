import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const DocumentDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
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
      </SimpleShowLayout>
    </Show>
  );
};
