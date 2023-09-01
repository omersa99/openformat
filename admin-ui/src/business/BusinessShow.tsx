import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";
import { CLIENTSANDSUPPLIER_TITLE_FIELD } from "../clientsAndSupplier/ClientsAndSupplierTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SETTING_TITLE_FIELD } from "../setting/SettingTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BN" source="bn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="settings"
          source="setting.id"
          reference="Setting"
        >
          <TextField source={SETTING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="businessId"
          label="accounts"
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
            <TextField
              label="Examined Balance Code"
              source="examinedBalanceCode"
            />
            <TextField
              label="Examined Balance Code Description"
              source="examinedBalanceCodeDescription"
            />
            <TextField label="ID" source="id" />
            <TextField label="Total Credit" source="totalCredit" />
            <TextField label="Total Debit" source="totalDebit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="businessId"
          label="documents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="clientSupplier"
              source="clientsandsupplier.id"
              reference="ClientsAndSupplier"
            >
              <TextField source={CLIENTSANDSUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Document Type" source="documentType" />
            <TextField label="fds" source="fds" />
            <TextField label="ID" source="id" />
            <TextField label="linked DocumentI ds" source="linkedDocumentIDs" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="businessId" label="items">
          <Datagrid rowClick="show">
            <ReferenceField
              label="business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <TextField label="Internal Item Code" source="internalItemCode" />
            <TextField label="Item Name" source="itemName" />
            <TextField label="opening balance" source="openingBalance" />
            <TextField label="Sorting Code" source="sortingCode" />
            <TextField
              label="Sorting Code Description"
              source="sortingCodeDescription"
            />
            <TextField
              label="Supplier/Manufacturer Code (in Procurement)"
              source="supplierManufacturerCodeInProcurement"
            />
            <TextField
              label="Unit of Measurement Description"
              source="unitOfMeasurementDescription"
            />
            <TextField label="Universal Item Code" source="universalItemCode" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
