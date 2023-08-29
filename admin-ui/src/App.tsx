import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BusinessList } from "./business/BusinessList";
import { BusinessCreate } from "./business/BusinessCreate";
import { BusinessEdit } from "./business/BusinessEdit";
import { BusinessShow } from "./business/BusinessShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { BankbookList } from "./bankbook/BankbookList";
import { BankbookCreate } from "./bankbook/BankbookCreate";
import { BankbookEdit } from "./bankbook/BankbookEdit";
import { BankbookShow } from "./bankbook/BankbookShow";
import { ClientsAndSupplierList } from "./clientsAndSupplier/ClientsAndSupplierList";
import { ClientsAndSupplierCreate } from "./clientsAndSupplier/ClientsAndSupplierCreate";
import { ClientsAndSupplierEdit } from "./clientsAndSupplier/ClientsAndSupplierEdit";
import { ClientsAndSupplierShow } from "./clientsAndSupplier/ClientsAndSupplierShow";
import { ItemTransactionList } from "./itemTransaction/ItemTransactionList";
import { ItemTransactionCreate } from "./itemTransaction/ItemTransactionCreate";
import { ItemTransactionEdit } from "./itemTransaction/ItemTransactionEdit";
import { ItemTransactionShow } from "./itemTransaction/ItemTransactionShow";
import { DocumentDetailList } from "./documentDetail/DocumentDetailList";
import { DocumentDetailCreate } from "./documentDetail/DocumentDetailCreate";
import { DocumentDetailEdit } from "./documentDetail/DocumentDetailEdit";
import { DocumentDetailShow } from "./documentDetail/DocumentDetailShow";
import { ReceiptDetailList } from "./receiptDetail/ReceiptDetailList";
import { ReceiptDetailCreate } from "./receiptDetail/ReceiptDetailCreate";
import { ReceiptDetailEdit } from "./receiptDetail/ReceiptDetailEdit";
import { ReceiptDetailShow } from "./receiptDetail/ReceiptDetailShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"importer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Business"
          list={BusinessList}
          edit={BusinessEdit}
          create={BusinessCreate}
          show={BusinessShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Bankbook"
          list={BankbookList}
          edit={BankbookEdit}
          create={BankbookCreate}
          show={BankbookShow}
        />
        <Resource
          name="ClientsAndSupplier"
          list={ClientsAndSupplierList}
          edit={ClientsAndSupplierEdit}
          create={ClientsAndSupplierCreate}
          show={ClientsAndSupplierShow}
        />
        <Resource
          name="ItemTransaction"
          list={ItemTransactionList}
          edit={ItemTransactionEdit}
          create={ItemTransactionCreate}
          show={ItemTransactionShow}
        />
        <Resource
          name="DocumentDetail"
          list={DocumentDetailList}
          edit={DocumentDetailEdit}
          create={DocumentDetailCreate}
          show={DocumentDetailShow}
        />
        <Resource
          name="ReceiptDetail"
          list={ReceiptDetailList}
          edit={ReceiptDetailEdit}
          create={ReceiptDetailCreate}
          show={ReceiptDetailShow}
        />
      </Admin>
    </div>
  );
};

export default App;
