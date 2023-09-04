-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_businessId_fkey";

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_clientsAndSuppliersId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_businessId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_clientSupplierId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentDetail" DROP CONSTRAINT "DocumentDetail_documentId_fkey";

-- DropForeignKey
ALTER TABLE "ReceiptDetail" DROP CONSTRAINT "ReceiptDetail_documentId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_accountInTransactionId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_documentDetailId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_receiptDetailId_fkey";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_clientsAndSuppliersId_fkey" FOREIGN KEY ("clientsAndSuppliersId") REFERENCES "ClientsAndSupplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountInTransactionId_fkey" FOREIGN KEY ("accountInTransactionId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_documentDetailId_fkey" FOREIGN KEY ("documentDetailId") REFERENCES "DocumentDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_receiptDetailId_fkey" FOREIGN KEY ("receiptDetailId") REFERENCES "ReceiptDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_clientSupplierId_fkey" FOREIGN KEY ("clientSupplierId") REFERENCES "ClientsAndSupplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentDetail" ADD CONSTRAINT "DocumentDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptDetail" ADD CONSTRAINT "ReceiptDetail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
