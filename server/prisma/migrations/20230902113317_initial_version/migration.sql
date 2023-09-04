/*
  Warnings:

  - You are about to drop the column `fds` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `linkedDocumentIDs` on the `Document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "fds",
DROP COLUMN "linkedDocumentIDs",
ADD COLUMN     "canceledDocument" BOOLEAN,
ADD COLUMN     "documentDate" INTEGER,
ADD COLUMN     "documentNumber" TEXT,
ADD COLUMN     "documentProductionDate" INTEGER,
ADD COLUMN     "linkedDocumentIds" TEXT;
