import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemServiceBase } from "./base/item.service.base";
import { mapToItemModel, parseM100 } from "src/parsers/parseM100";

@Injectable()
export class ItemService extends ItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async Line2Item(line: string) {
    try {
      // Parse and map the data
      const parsedData = parseM100(line);
      const itemData = mapToItemModel(parsedData);

      // Check if an Item with the specified universal item code already exists
      const existingItem = await this.prisma.item.findFirst({
        where: {
          universalItemCode: itemData.universalItemCode, // Adjust this based on your actual field name
        },
      });

      if (existingItem) {
        console.log("Item with the specified universal item code already exists.");
        return;
      }

      // Create or find the Business record based on the authorized business number
      let businessRecord;
      const authorizedBusinessNumber = parsedData["Authorized Business Number"];

      const existingBusinessRecord = await this.prisma.business.findFirst({
        where: {
          bn: authorizedBusinessNumber,
        },
      });

      if (!existingBusinessRecord) {
        console.log("Item with the specified universal item code already exists.");
        return;
      }
      businessRecord = existingBusinessRecord;

      // Create the Item record and associate it with the Business record
      const createdItem = await this.prisma.item.create({
        data: {
          ...itemData,
          business: {
            connect: {
              id: businessRecord.id,
            },
          },
        },
      });

      console.log("Item created:", createdItem);
    } catch (error) {
      console.error("An error occurred while creating the item:", error);
    }
  }
  parseM100(line: string) {
    throw new Error("Function not implemented.");
  }
}
