/*
  Warnings:

  - The `documentNumber` column on the `Document` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "documentNumber",
ADD COLUMN     "documentNumber" INTEGER;

-- AlterTable
ALTER TABLE "ReceiptDetail" ADD COLUMN     "paymentCheckClearanceDate" TIMESTAMP(3),
ADD COLUMN     "paymentData" JSONB,
ADD COLUMN     "paymentType" INTEGER,
ADD COLUMN     "total" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "documentDetailId" TEXT,
ADD COLUMN     "receiptDetailId" TEXT;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_documentDetailId_fkey" FOREIGN KEY ("documentDetailId") REFERENCES "DocumentDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_receiptDetailId_fkey" FOREIGN KEY ("receiptDetailId") REFERENCES "ReceiptDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
