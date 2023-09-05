/*
  Warnings:

  - A unique constraint covering the columns `[bn]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bn` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "bn" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ClientsAndSupplier" ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Business_bn_key" ON "Business"("bn");
