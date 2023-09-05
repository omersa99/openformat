/*
  Warnings:

  - You are about to drop the column `bankbookId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `bankbooksId` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the `Bankbook` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_bankbookId_fkey";

-- DropForeignKey
ALTER TABLE "Business" DROP CONSTRAINT "Business_bankbooksId_fkey";

-- DropIndex
DROP INDEX "Business_bankbooksId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "bankbookId",
ADD COLUMN     "businessId" TEXT;

-- AlterTable
ALTER TABLE "Business" DROP COLUMN "bankbooksId",
ADD COLUMN     "ownerId" TEXT;

-- DropTable
DROP TABLE "Bankbook";

-- CreateIndex
CREATE UNIQUE INDEX "Business_ownerId_key" ON "Business"("ownerId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;
