/*
  Warnings:

  - You are about to drop the column `documentProductionDate` on the `Document` table. All the data in the column will be lost.
  - The `documentDate` column on the `Document` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `businessId` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "documentProductionDate",
ADD COLUMN     "deductionAmount" DECIMAL(65,30),
ADD COLUMN     "modifiedDate" TIMESTAMP(3),
ALTER COLUMN "businessId" SET NOT NULL,
DROP COLUMN "documentDate",
ADD COLUMN     "documentDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "DocumentDetail" ADD COLUMN     "discountAmount" DECIMAL(65,30);
