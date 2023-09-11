import { PrismaService } from "src/prisma/prisma.service";
import { getDocumentsForBusiness } from "./main";
import { C100AsJson } from "./C100totext"; // Import the DocumentJson interface
import { DocumentJson, FieldInfo } from "src/types";
import { D110ToJson } from "./D110toText";
import { M100ToJson } from "./M100ToText";
import { AccountToJson } from "./B110toText";
import { TransactionToJson } from "./B100toText";
import { D120ToJson } from "./D120.toText";
import { A100AsJson, Z100AsJson } from "./basicData";
import { generateRandomNumber } from "src/clientsAndSupplier/clientsAndSupplier.service";
import { A000ToJson, CounterToJson } from "./A000toText";

export async function Business2Json(businessID: string, prisma: PrismaService) {
  let business;
  try {
    business = await prisma.business.findUnique({ where: { id: businessID } });
  } catch (err) {
    console.log("Error finding business", err);
    return;
  }

  const documents = await getDocumentsForBusiness(businessID, prisma);
  const documentsJson: DocumentJson[][] = [];
  const detailToJsonarray: DocumentJson[][] = [];
  const receiptDetailToJsonarray: DocumentJson[][] = [];
  const itemsToJsonArray: DocumentJson[][] = [];
  const accountsToJsonArray: DocumentJson[][] = [];
  const transactionsToJsonArray: DocumentJson[][] = [];
  const allJsonArrays: any = [];

  let generalCounter = 1;
  let ProccessIdentifier = generateRandomNumber(15);
  //A100
  let A100Record = await A100AsJson(generalCounter, ProccessIdentifier);
  allJsonArrays.push([A100Record]);
  generalCounter += 1;

  if (documents) {
    for (const doc of documents) {
      const doc2json = await C100AsJson(doc.id, prisma, generalCounter);
      if (doc2json) {
        documentsJson.push(doc2json);
        generalCounter += 1;
      }

      // Fetch document details for the current document
      const documentDetails = await prisma.documentDetail.findMany({ where: { documentId: doc.id } });
      let internalCounter = 1;
      for (const Detail of documentDetails) {
        const detailLine = await D110ToJson(doc, Detail, prisma, generalCounter, internalCounter);
        detailToJsonarray.push(detailLine);
        //push it to final result
        internalCounter += 1;
        generalCounter += 1;
      }

      // Fetch document receiptDetails for the current document
      const receiptDetails = await prisma.receiptDetail.findMany({ where: { documentId: doc.id } });
      if (receiptDetails) {
        internalCounter = 1;
        for (const receiptDetail of receiptDetails) {
          const reciptLine = await D120ToJson(doc, receiptDetail, prisma, generalCounter, internalCounter);
          if (reciptLine) {
            receiptDetailToJsonarray.push(reciptLine);
            generalCounter += 1;
            internalCounter += 1;
          }
        }
      }

      // receiptDetails Transactions
      for (const receiptDetail of receiptDetails) {
        const receiptTransactions = await prisma.transaction.findMany({
          where: {
            // documentDetailId: receiptDetail.id,
            receiptDetailId: receiptDetail.id,
          },
        });
        internalCounter = 1;
        let recordUniqueId = generalCounter * 10;
        console.log(receiptTransactions);
        for (const trans of receiptTransactions) {
          // deal with Transaction

          const transactionLine = await TransactionToJson(trans, prisma, generalCounter, internalCounter, recordUniqueId);
          transactionsToJsonArray.push(transactionLine);
          internalCounter += 1;
          generalCounter += 1;
        }
      }

      //Transactions Details
      if (documentDetails) {
        for (const Detail of documentDetails) {
          const DetailTransactions = await prisma.transaction.findMany({
            where: {
              documentDetailId: Detail.id,
            },
          });

          let internalCounter = 1;
          let recordUniqueId = generalCounter * 10;
          for (const trans of DetailTransactions) {
            // deal with Detail Transactions
            const transactionLine = await TransactionToJson(trans, prisma, generalCounter, internalCounter, recordUniqueId);
            transactionsToJsonArray.push(transactionLine);

            internalCounter += 1;
            generalCounter += 1;
          }
          // generalCounter += 1;
        }
      }
    }
    // M100 == Items
    const Items = await prisma.item.findMany({ where: { businessId: business?.id } });
    if (Items) {
      for (const item of Items) {
        const itemsToJson = await M100ToJson(item, prisma, generalCounter);
        if (itemsToJson) {
          itemsToJsonArray.push(itemsToJson); // Spread the results into the array
          generalCounter += 1;
        }
      }
    }

    // B110 === accounts
    const accounts = await prisma.account.findMany({ where: { businessId: business?.id } });
    if (accounts) {
      for (const account of accounts) {
        const accountToJson = await AccountToJson(account, prisma, generalCounter);
        if (accountToJson) {
          accountsToJsonArray.push(accountToJson);
          generalCounter += 1;
        }
      }
    }
  } else {
    console.log("No documents found for the business.");
  }

  allJsonArrays.push(documentsJson);
  allJsonArrays.push(detailToJsonarray);
  allJsonArrays.push(itemsToJsonArray);
  allJsonArrays.push(accountsToJsonArray);
  allJsonArrays.push(transactionsToJsonArray);
  allJsonArrays.push(receiptDetailToJsonarray);

  //Z900

  //A100
  let Z900Record = await Z100AsJson(generalCounter, ProccessIdentifier);
  allJsonArrays.push([Z900Record]);

  const idsToModify = [1252, 1202, 1452, 1402, 1352, 1302, 1102, 1152];

  for (const jsonArray of allJsonArrays) {
    for (const row of jsonArray) {
      // console.log(row);
      for (const record of row) {
        // console.log(record);

        if (idsToModify.includes(record["Field_Id"])) {
          record.value = business?.bn;
        }
      }
    }
  }

  //Creare INI.txt file
  const ini: any = [];
  // generalCounter += 1;
  ini.push(await A000ToJson(business?.bn || 0, generalCounter, ProccessIdentifier));
  ini.push(await CounterToJson("A100", 1));
  ini.push(await CounterToJson("C100", documentsJson.length | 0));
  ini.push(await CounterToJson("D110", detailToJsonarray.length | 0));
  ini.push(await CounterToJson("D120", receiptDetailToJsonarray.length | 0));
  ini.push(await CounterToJson("M100", itemsToJsonArray.length | 0));
  ini.push(await CounterToJson("B110", accountsToJsonArray.length | 0));
  ini.push(await CounterToJson("B100", transactionsToJsonArray.length | 0));
  ini.push(await CounterToJson("Z900", 1));
  // console.log(ini);
  return { allJsonArrays, ini };
}
