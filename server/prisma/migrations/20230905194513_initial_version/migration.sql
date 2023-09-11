-- AlterTable
ALTER TABLE "ReceiptDetail" ADD COLUMN     "accountNumber" TEXT,
ADD COLUMN     "bankNumber" INTEGER,
ADD COLUMN     "branchIdentifier" TEXT,
ADD COLUMN     "branchNumber" INTEGER,
ADD COLUMN     "checkNumber" INTEGER,
ADD COLUMN     "creditTransactionType" INTEGER,
ADD COLUMN     "payeeCompanyCode" TEXT,
ADD COLUMN     "swipedCardName" TEXT;
