import { Item } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

export async function handleItemInandOut(itemID: string, documentType: number, quantity: number, prisma: PrismaService) {
  const itemOutDocumentTypes = [200, 205, 300, 305, 320, 610, 840];
  const itemInDocumentTypes = [210, 330, 600, 700, 710, 810];

  const item = await prisma.item.findUnique({ where: { id: itemID } });
  if (!item) {
    return;
  }

  if (itemID === "-1") {
    return;
  } else {
    try {
      if (itemOutDocumentTypes.includes(documentType)) {
        await prisma.itemTransaction.create({ data: { internalItemCode: item.internalItemCode, inflows: quantity } });
      } else if (itemInDocumentTypes.includes(documentType)) {
        await prisma.itemTransaction.create({ data: { internalItemCode: item.internalItemCode, outflows: quantity } });
      } else {
        return;
      }
    } catch (err) {
      console.log("no such item", err);
      return;
    }
  }
}

// async function updateItemQuantity(itemID: string, quantityChange: number, prisma: PrismaService) {
//   try {
//     const item = await prisma.item.findUnique({
//       where: { id: itemID },
//     });

//     if (!item) {
//       console.log("Item not found");
//       return;
//     }

//     const updatedQuantity = (item.openingBalance || 0) + quantityChange;

//     await prisma.item.update({
//       where: { id: itemID },
//       data: { openingBalance: updatedQuantity },
//     });

//     console.log("Item quantity updated successfully");
//   } catch (err) {
//     console.log("Error updating item quantity:", err);
//   }
// }

export async function calculateItemIncomeAndOutcome(itemID: string, prisma: PrismaService) {
  try {
    const item = await prisma.item.findUnique({
      where: { id: itemID },
    });

    if (!item) {
      console.log("Item not found");
      return;
    }

    const itemTransactions = await prisma.itemTransaction.findMany({
      where: { internalItemCode: item.internalItemCode },
    });

    let totalInflows = 0;
    let totalOutflows = 0;

    itemTransactions.forEach((transaction) => {
      totalInflows += transaction.inflows || 0;
      totalOutflows += transaction.outflows || 0;
    });
    console.log("Total flows: ", totalOutflows);
    return { totalInflows, totalOutflows };
  } catch (err) {
    console.log("Error calculating item income and outcome:", err);
    return;
  }
}
