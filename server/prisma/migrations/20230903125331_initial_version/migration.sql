-- AlterTable
ALTER TABLE "ClientsAndSupplier" ADD COLUMN     "businessId" TEXT;

-- AddForeignKey
ALTER TABLE "ClientsAndSupplier" ADD CONSTRAINT "ClientsAndSupplier_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;
