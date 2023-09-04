/*
  Warnings:

  - You are about to drop the column `data` on the `Business` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientsAndSuppliersId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[settingsId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "EnumDocumentDetailTransactionType" AS ENUM ('Service', 'Sale', 'ServiceAndSales');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "clientsAndSuppliersId" TEXT;

-- AlterTable
ALTER TABLE "Business" DROP COLUMN "data",
ADD COLUMN     "settingsId" TEXT;

-- AlterTable
ALTER TABLE "DocumentDetail" ADD COLUMN     "itemId" TEXT,
ADD COLUMN     "priceWithoutVat" INTEGER,
ADD COLUMN     "quantity" INTEGER,
ADD COLUMN     "transactionType" "EnumDocumentDetailTransactionType",
ADD COLUMN     "vatRate" INTEGER;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "businessId" TEXT;

-- CreateTable
CREATE TABLE "Setting" (
    "accountingSettings" JSONB,
    "businessSettings" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_clientsAndSuppliersId_key" ON "Account"("clientsAndSuppliersId");

-- CreateIndex
CREATE UNIQUE INDEX "Business_settingsId_key" ON "Business"("settingsId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_settingsId_fkey" FOREIGN KEY ("settingsId") REFERENCES "Setting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_clientsAndSuppliersId_fkey" FOREIGN KEY ("clientsAndSuppliersId") REFERENCES "ClientsAndSupplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentDetail" ADD CONSTRAINT "DocumentDetail_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
