/*
  Warnings:

  - You are about to drop the column `accountInTransaction` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bankbooksId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "bankbookId" TEXT;

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "bankbooksId" TEXT;

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "businessId" TEXT,
ADD COLUMN     "clientSupplierId" TEXT;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "accountInTransaction",
ADD COLUMN     "accountInTransactionId" TEXT;

-- CreateTable
CREATE TABLE "DocumentDetail" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceiptDetail" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReceiptDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_bankbooksId_key" ON "Business"("bankbooksId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_bankbooksId_fkey" FOREIGN KEY ("bankbooksId") REFERENCES "Bankbook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_bankbookId_fkey" FOREIGN KEY ("bankbookId") REFERENCES "Bankbook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountInTransactionId_fkey" FOREIGN KEY ("accountInTransactionId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_clientSupplierId_fkey" FOREIGN KEY ("clientSupplierId") REFERENCES "ClientsAndSupplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentDetail" ADD CONSTRAINT "DocumentDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptDetail" ADD CONSTRAINT "ReceiptDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
