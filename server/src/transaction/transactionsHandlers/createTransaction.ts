import { PrismaService } from "src/prisma/prisma.service";
import { Document, DocumentDetail } from "@prisma/client";

export async function createTransaction(
  actionIndicator: number,
  actionAmount: number,
  portion: number,
  accountId: string,
  documentDetailId: string,
  prisma: PrismaService
) {
  await prisma.transaction.create({
    data: {
      actionIndicator,
      actionAmount,
      portion,
      accountInTransaction: {
        connect: {
          id: accountId,
        },
      },
      documentDetail: {
        connect: {
          id: documentDetailId,
        },
      },
    },
  });
}

export async function createReceiptTransaction(
  actionIndicator: number,
  actionAmount: number,
  portion: number,
  accountId: string,
  receiptDetailID: string,
  prisma: PrismaService
) {
  await prisma.transaction.create({
    data: {
      actionIndicator,
      actionAmount,
      portion,
      accountInTransaction: {
        connect: {
          id: accountId,
        },
      },
      receiptDetail: {
        connect: {
          id: receiptDetailID,
        },
      },
    },
  });
}
