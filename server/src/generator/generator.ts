// take the busness id
// loop over document headers = C100
// for (doc in documents)
//     for (details in document.details)
//     for recipt in documentr.recipts
//for transaction in transacions => keep the json
//     for account in business.accounts
// A100

import { PrismaService } from "src/prisma/prisma.service";
import { getDocumentsForBusiness } from "./main";
import { C100AsJson } from "./C100totext"; // Import the DocumentJson interface
import { DocumentJson, FieldInfo } from "src/types";
import { D110ToJson } from "./D110toText";
import { M100ToJson } from "./M100ToText";
import { AccountToJson } from "./B110toText";
import { TransactionToJson } from "./B100toText";

export async function Business2Json(businessID: string, prisma: PrismaService) {
  let business;
  try {
    business = await prisma.business.findUnique({ where: { id: businessID } });
  } catch (err) {
    console.log("Error finding business", err);
    return;
  }

  const documents = await getDocumentsForBusiness(businessID, prisma);
  const documentsJson: DocumentJson[] = [];
  const detailToJsonarray: DocumentJson[] = [];
  const itemsToJsonArray: DocumentJson[] = [];
  const accountsToJsonArray: DocumentJson[] = [];
  const transactionsToJsonArray: DocumentJson[] = [];

  let generalCounter = 1;

  if (documents) {
    for (const doc of documents) {
      const doc2json = await C100AsJson(doc.id, prisma, generalCounter);
      if (doc2json) {
        documentsJson.push(...doc2json);
      }
      // Fetch document details for the current document
      const documentDetails = await prisma.documentDetail.findMany({ where: { documentId: doc.id } });
      let internalCounter = 1;
      for (const Detail of documentDetails) {
        const detailLine = await D110ToJson(doc, Detail, prisma, generalCounter, internalCounter);
        detailToJsonarray.push(...detailLine);
        //push it to final result
        internalCounter += 1;
        generalCounter += 1;
      }
      generalCounter += 1;

      const receiptDetails = await prisma.receiptDetail.findMany({ where: { documentId: doc.id } });
      if (documentDetails) {
        for (const Detail of documentDetails) {
          const DetailTransactions = await prisma.transaction.findMany({
            where: {
              documentDetailId: Detail.id,
            },
          });
          let internalCounter = 1;
          for (const trans of DetailTransactions) {
            // deal with Detail Transactions
            const transactionLine = await TransactionToJson(trans, prisma, generalCounter, internalCounter);
            transactionsToJsonArray.push(...transactionLine);
            internalCounter += 1;
          }
          generalCounter += 1;
        }
      }
      if (receiptDetails) {
        let internalCounter = 1;

        for (const receiptDetail of receiptDetails) {
          const receiptTransactions = await prisma.transaction.findMany({
            where: {
              documentDetailId: receiptDetail.id,
            },
          });

          let internalCounter = 1;
          for (const trans of receiptTransactions) {
            // deal with Transaction
            const transactionLine = await TransactionToJson(trans, prisma, generalCounter, internalCounter);
            transactionsToJsonArray.push(...transactionLine);
            internalCounter += 1;
          }
        }
        generalCounter += 1;
      }

      // M100 == Items
      const Items = await prisma.item.findMany({ where: { businessId: business?.id } });
      if (Items) {
        for (const item of Items) {
          const itemsToJson = await M100ToJson(item, prisma, generalCounter);
          if (itemsToJson) {
            itemsToJsonArray.push(...itemsToJson); // Spread the results into the array
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
            accountsToJsonArray.push(...accountToJson);
            generalCounter += 1;
          }
        }
      }
    }
  } else {
    console.log("No documents found for the business.");
  }

  documentsJson.push(...detailToJsonarray);
  documentsJson.push(...itemsToJsonArray);
  documentsJson.push(...accountsToJsonArray);
  documentsJson.push(...transactionsToJsonArray);

  // Modify specific fields where id = 1234 or 4567
  for (const row of documentsJson) {
    if (row.Field_Id === 1252 || row.Field_Id === 1202 || row.Field_Id === 1452 || row.Field_Id === 1402 || row.Field_Id === 1352) {
      row.value = business?.bn;
    }
  }

  return documentsJson;
}
