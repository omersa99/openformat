import { Document, DocumentDetail } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { calculateTransactionDetails } from "../transactionHandler";
import { createTransaction } from "./createTransaction";
import { fetchCustomerAccount } from "./fetchCustomerAccount";

export async function handleTyp305to345(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  const customerAccount = await fetchCustomerAccount(document, prisma);
  if (!customerAccount) {
    console.log("Could not find customer account");
    return;
  }

  const { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount } = calculateTransactionDetails(documentDetail);

  const actionIndicatorFirst = document.documentType === 330 ? 2 : 1;
  const actionIndicatorSecond = document.documentType === 330 ? 1 : 2;
  await createTransaction(actionIndicatorFirst, TotalAmountWithoutVat + VATAmount, document.documentNumber || 0, customerAccount.id, documentDetail.id, prisma);

  const payableAccount = await prisma.account.findFirst({ where: { accountKey: "50001" } });
  const taxAccount = await prisma.account.findFirst({ where: { accountKey: "60002" } });

  if (payableAccount && taxAccount) {
    await createTransaction(actionIndicatorSecond, TotalAmountWithoutVat, document.documentNumber || 0, payableAccount.id, documentDetail.id, prisma);
    await createTransaction(actionIndicatorSecond, VATAmount, document.documentNumber || 0, taxAccount.id, documentDetail.id, prisma);
  }
}

export async function handleTyp700(document: Document, prisma: PrismaService, documentDetail: DocumentDetail) {
  const customerAccount = await fetchCustomerAccount(document, prisma);
  if (!customerAccount) {
    console.log("Could not find customer account");
    return;
  }
  const { quantity, pricePerUnit, discount, TotalAmountWithoutVat, VatRate, VATAmount } = calculateTransactionDetails(documentDetail);

  const outCome = await prisma.account.findFirst({ where: { accountKey: "13000" } });
  const taxAccount = await prisma.account.findFirst({ where: { accountKey: "60003" } });

  if (outCome && taxAccount) {
    await createTransaction(1, TotalAmountWithoutVat + VATAmount, document.documentNumber || 0, outCome.id, documentDetail.id, prisma);
    await createTransaction(2, TotalAmountWithoutVat, document.documentNumber || 0, customerAccount.id, documentDetail.id, prisma);
    await createTransaction(2, VATAmount, document.documentNumber || 0, taxAccount.id, documentDetail.id, prisma);
  }
}
