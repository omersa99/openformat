/*
  Warnings:

  - The `transactionType` column on the `DocumentDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DocumentDetail" DROP COLUMN "transactionType",
ADD COLUMN     "transactionType" TEXT;

-- DropEnum
DROP TYPE "EnumDocumentDetailTransactionType";
