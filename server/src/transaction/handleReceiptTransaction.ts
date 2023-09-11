import { ReceiptDetail, Document } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { fetchCustomerAccount } from "./transactionsHandlers/fetchCustomerAccount";
import { createReceiptTransaction, createTransaction } from "./transactionsHandlers/createTransaction";

export async function handleReceipt400(document: Document, prisma: PrismaService, receiptDetail: ReceiptDetail) {
  const customerAccount = await fetchCustomerAccount(document, prisma);
  if (!customerAccount) {
    console.log("Could not find customer account");
    return;
  }

  const payableAccountKey = receiptDetail.paymentType === 1 ? "31001" : "31002";
  const payableAccount = await prisma.account.findFirst({
    where: { accountKey: payableAccountKey },
  });

  await createReceiptTransaction(2, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, customerAccount.id, receiptDetail.id, prisma);
  if (payableAccount) {
    await createReceiptTransaction(1, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, payableAccount.id, receiptDetail.id, prisma);
  }
}

export async function handleReceipt420(document: Document, prisma: PrismaService, receiptDetail: ReceiptDetail) {
  const BankAccount = await prisma.account.findFirst({
    where: { accountKey: "12001" },
  });
  const CashAccount = await prisma.account.findFirst({
    where: { accountKey: "31001" },
  });
  if (BankAccount && CashAccount) {
    await createReceiptTransaction(1, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, BankAccount?.id, receiptDetail.id, prisma);
    await createReceiptTransaction(2, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, CashAccount.id, receiptDetail.id, prisma);
  }
}

// await createReceiptTransaction(2, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, customerAccount.id, receiptDetail.id, prisma);
// if (payableAccount) {
//   await createReceiptTransaction(1, receiptDetail.total?.toNumber() || 0, document.documentNumber || 0, payableAccount.id, receiptDetail.id, prisma);
// } else {
//   console.log("could not find payable account");
// }

// await prisma.transaction.create({
//   data: {
//     actionIndicator: 2,
//     actionAmount: receiptDetail.total,

//     accountInTransaction: {
//       connect: {
//         id: customerAccount.id,
//       },
//     },
//     receiptDetail: {
//       connect: {
//         id: receiptDetail.id,
//       },
//     },
//   },
// });

// let payableAccountKey;
// switch (receiptDetail.paymentType) {
//   case 1:
//     payableAccountKey = "31001";
//     break;
//   case 2:
//     payableAccountKey = "31002";
//     break;
//   default:
//     payableAccountKey = "31001";
// }

// try {
//   const payableAccount = await prisma.account.findFirst({
//     where: {
//       accountKey: payableAccountKey,
//     },
//   });

//   if (!payableAccount) {
//     console.log("could not find payable account");
//     return;
//   }
//   await prisma.transaction.create({
//     data: {
//       actionIndicator: 1,
//       actionAmount: receiptDetail.total,
//       accountInTransaction: {
//         connect: {
//           id: payableAccount.id,
//         },
//       },
//       receiptDetail: {
//         connect: {
//           id: receiptDetail.id,
//         },
//       },
//     },
//   });
// } catch (err) {
//   console.log("could not find payable account :", err);
//   return;
// }
