/*
  Warnings:

  - Made the column `documentType` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "documentType" SET NOT NULL;

-- AlterTable
ALTER TABLE "DocumentDetail" ALTER COLUMN "priceWithoutVat" SET DATA TYPE DECIMAL(65,30);
