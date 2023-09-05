/*
  Warnings:

  - You are about to drop the column `matchingField_1` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `matchingField_2` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `referenceDocumentType` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `referenceDocumentType_2` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "documentType" INTEGER,
ADD COLUMN     "fds" TEXT,
ADD COLUMN     "linkedDocumentIDs" JSONB;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "openingBalance" INTEGER;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "matchingField_1",
DROP COLUMN "matchingField_2",
DROP COLUMN "referenceDocumentType",
DROP COLUMN "referenceDocumentType_2";
