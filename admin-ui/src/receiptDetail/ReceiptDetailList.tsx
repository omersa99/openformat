import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const ReceiptDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"receipt details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Account Number" source="accountNumber" />
        <TextField label="Bank Number" source="bankNumber" />
        <TextField label="Branch Identifier" source="branchIdentifier" />
        <TextField label="Branch Number" source="branchNumber" />
        <TextField label="Check Number" source="checkNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Credit Transaction Type"
          source="creditTransactionType"
        />
        <ReferenceField
          label="document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Payee Company Code" source="payeeCompanyCode" />
        <TextField
          label="Payment/Check Clearance Date"
          source="paymentCheckClearanceDate"
        />
        <TextField label="payment data" source="paymentData" />
        <TextField label="payment type" source="paymentType" />
        <TextField label="Swiped Card Name" source="swipedCardName" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
