/*
  Warnings:

  - Made the column `documentId` on table `DocumentDetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `documentId` on table `ReceiptDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "DocumentDetail" DROP CONSTRAINT "DocumentDetail_documentId_fkey";

-- DropForeignKey
ALTER TABLE "ReceiptDetail" DROP CONSTRAINT "ReceiptDetail_documentId_fkey";

-- AlterTable
ALTER TABLE "DocumentDetail" ALTER COLUMN "documentId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ReceiptDetail" ALTER COLUMN "documentId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "DocumentDetail" ADD CONSTRAINT "DocumentDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptDetail" ADD CONSTRAINT "ReceiptDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
