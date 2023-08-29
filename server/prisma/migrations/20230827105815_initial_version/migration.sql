-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "accountantClassificationCode" INTEGER,
    "accountBalanceAtStartOfSegment" INTEGER,
    "accountBalanceInForeignCurrency" INTEGER,
    "accountKey" TEXT,
    "accountName" TEXT,
    "centerAccount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currencyCodeForForeignCurrency" TEXT,
    "examinedBalanceCode" TEXT,
    "examinedBalanceCodeDescription" TEXT,
    "id" TEXT NOT NULL,
    "totalCredit" INTEGER,
    "totalDebit" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "accountInTransaction" TEXT,
    "actionAmount" INTEGER,
    "actionIndicator" INTEGER,
    "actionOperation" TEXT,
    "counterAccount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "date" TIMESTAMP(3),
    "details" TEXT,
    "entryDate" TIMESTAMP(3),
    "foreignCurrencyAmount" INTEGER,
    "foreignCurrencyCode" TEXT,
    "id" TEXT NOT NULL,
    "lineNumberInTransaction" INTEGER,
    "matchingField_1" TEXT,
    "matchingField_2" TEXT,
    "modifiedDate" TIMESTAMP(3),
    "portion" INTEGER,
    "reference" TEXT,
    "reference_2" TEXT,
    "referenceDocumentType" INTEGER,
    "referenceDocumentType_2" INTEGER,
    "transactionNumber" INTEGER,
    "transactionType" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "id" TEXT NOT NULL,
    "internalItemCode" TEXT,
    "itemName" TEXT,
    "sortingCode" TEXT,
    "sortingCodeDescription" TEXT,
    "supplierManufacturerCodeInProcurement" TEXT,
    "unitOfMeasurementDescription" TEXT,
    "universalItemCode" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bankbook" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bankbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientsAndSupplier" (
    "addressCity" TEXT,
    "addressCountry" TEXT,
    "addressHouseNumber" TEXT,
    "addressPostalCode" TEXT,
    "addressStreet" TEXT,
    "businessNumber" TEXT,
    "countryCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientsAndSupplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemTransaction" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "inflows" INTEGER,
    "internalItemCode" TEXT,
    "outflows" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
