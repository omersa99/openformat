import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessServiceBase } from "./base/business.service.base";
import { Prisma, Business, ClientsAndSupplier } from "@prisma/client";
import { defaultAccountsData } from "src/account/defaultAccounts";
import { initialCounters } from "src/setting/defaultDocumentNumbers";
import { ClientsAndSupplierService } from "src/clientsAndSupplier/clientsAndSupplier.service";
import { Document } from "src/document/base/Document";
import { DocumentService } from "src/document/document.service";
import { DocumentDetailService } from "src/documentDetail/documentDetail.service";
import { ReceiptDetailService } from "src/receiptDetail/receiptDetail.service";
import { ItemService } from "src/item/item.service";
import { Item } from "src/item/base/Item";

@Injectable()
export class BusinessService extends BusinessServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    private readonly clientsAndSupplierService: ClientsAndSupplierService,
    private readonly itemService: ItemService,
    private readonly documents: DocumentService,
    private readonly documentDetail: DocumentDetailService,
    private readonly ReceiptDetail: ReceiptDetailService
  ) {
    super(prisma);
  }

  async create<T extends Prisma.BusinessCreateArgs>(args: Prisma.SelectSubset<T, Prisma.BusinessCreateArgs>): Promise<Business> {
    const newBusiness = await super.create(args);

    await this.prisma.setting.create({
      data: {
        accountingSettings: initialCounters,
        business: {
          connect: { id: newBusiness.id },
        },
      },
    });

    await this.createDefaultAccounts(newBusiness.id);
    let mainCustomer = await this.createDefaultClients(newBusiness.id); // Add this line
    let defaultItem = await this.createDefaultItem(newBusiness.id); // Add this line
    // await this.DocumentsGenerator(mainCustomer, newBusiness, 200);
    for (let i = 0; i < 2; i++) {
      await this.ManyDocumentsGenerator(
        mainCustomer,
        newBusiness,
        [100, 200, 205, 210, 300, 305, 310, 330, 340, 345, 500, 700, 710, 910, 900, 840, 600, 610, 800, 810, 820, 830],
        defaultItem
      );
      await this.ManyReciptsGenerator(mainCustomer, newBusiness, [400, 405, 420, 410]);
      await this.InvoiceRecipt(mainCustomer, newBusiness, defaultItem);
    }
    return newBusiness;
  }

  async createDefaultAccounts(businessId: string) {
    const defaultAccounts = defaultAccountsData.map((account) => ({
      ...account,
      businessId,
    }));

    await this.prisma.account.createMany({
      data: defaultAccounts,
    });
  }

  async createDefaultClients(businessId: string) {
    const defaultClient = {
      businessNumber: "058178930",
      name: "Ashrf",
      addressCity: "New York",
      addressHouseNumber: "123",
      addressPostalCode: "10001",
      addressStreet: "Wall Street",
      countryCode: "IL",
    };
    let Client = await this.clientsAndSupplierService.create({
      data: {
        ...defaultClient,
        businessId,
      },
    });

    return Client;
  }

  async createDefaultItem(businessId: string) {
    const defaultItem = {
      internalItemCode: "123456",
      itemName: "TV",
      openingBalance: 20,
      sortingCode: "123456",
      sortingCodeDescription: "Desc",
      unitOfMeasurementDescription: "יחידה",
    };
    let Item = await this.itemService.create({
      data: {
        ...defaultItem,
        businessId,
      },
    });

    return Item;
  }

  async InvoiceRecipt(client: ClientsAndSupplier, Business: Business, item: Item) {
    let invoicRec = await this.ManyDocumentsGenerator(client, Business, [320], item);

    // Create details for the document
    await this.ReceiptDetail.create({
      data: {
        paymentType: 1,
        total: 200,
        document: {
          connect: { id: invoicRec?.id },
        },
      },
    });
  }
  async DocumentsGenerator(client: ClientsAndSupplier, Business: Business, documentTypeNum: number | 200) {
    // crete multiplication of 200 documents
    let DocumentData = {
      businessId: Business.id,
      clientSupplierId: client.id,
      // documentDate: "",
      deductionAmount: 0,
      documentType: documentTypeNum,
    };
    let newDocument = await this.documents.create({
      data: {
        ...DocumentData,
      },
    });

    //create details for the document
    await this.prisma.documentDetail.create({
      data: {
        item: {
          connect: {
            id: "clm8ymgl30002vgx8zme89hwh",
          },
        },
        priceWithoutVat: 10,
        quantity: 20,
        transactionType: "1",
        vatRate: 17,
        document: {
          connect: { id: newDocument.id },
        },
      },
    });
  }

  async ManyDocumentsGenerator(client: ClientsAndSupplier, Business: Business, documentTypeNums: number[], item: Item) {
    // Loop through array of document types
    let newDocument;
    for (const documentTypeNum of documentTypeNums) {
      let DocumentData = {
        // businessId: Business.id,

        // documentDate: "",
        deductionAmount: 0,
        documentType: documentTypeNum, // Use the current document type number from the loop
      } as Prisma.DocumentCreateInput;

      newDocument = await this.documents.create({
        data: {
          ...DocumentData,
          business: {
            connect: {
              id: Business.id,
            },
          },
          clientSupplier: {
            connect: {
              id: client.id,
            },
          },
        },
      });

      // Create details for the document
      await this.documentDetail.create({
        data: {
          item: {
            connect: {
              id: item.id,
            },
          },
          priceWithoutVat: 10,
          quantity: 20,
          transactionType: "1",
          vatRate: 17,
          document: {
            connect: { id: newDocument.id },
          },
        },
      });
    }
    return newDocument;
  }

  async ManyReciptsGenerator(client: ClientsAndSupplier, Business: Business, documentTypeNums: number[]) {
    // Loop through array of document types
    for (const documentTypeNum of documentTypeNums) {
      let DocumentData = {
        // businessId: Business.id,

        // documentDate: "",
        deductionAmount: 0,
        documentType: documentTypeNum, // Use the current document type number from the loop
      } as Prisma.DocumentCreateInput;

      let newDocument = await this.documents.create({
        data: {
          ...DocumentData,
          business: {
            connect: {
              id: Business.id,
            },
          },
          clientSupplier: {
            connect: {
              id: client.id,
            },
          },
        },
      });

      // Create details for the document
      await this.ReceiptDetail.create({
        data: {
          paymentType: 1,
          total: 200,
          document: {
            connect: { id: newDocument.id },
          },
        },
      });
    }
  }
}
