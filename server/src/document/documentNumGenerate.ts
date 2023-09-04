import { PrismaService } from "../prisma/prisma.service";

type AccountingSettings = {
  [key: number]: number; // Use a numeric index signature
};

export async function getNextDocumentNumber(prisma: PrismaService, businessId: string, documentType: number): Promise<number | null> {
  const businessSetting = await prisma.setting.findFirst({
    where: { business: { id: businessId } },
  });

  if (!businessSetting) {
    return null;
  }

  const accountingSettings = (businessSetting.accountingSettings as AccountingSettings) || {};
  const currentNumber = accountingSettings[documentType];

  // Increment the counter
  const nextNumber = currentNumber + 1;

  // Merge changes into existing settings
  const updatedSettings = {
    ...accountingSettings,
    [documentType]: nextNumber,
  };

  await prisma.setting.update({
    where: { id: businessSetting.id },
    data: { accountingSettings: updatedSettings },
  });

  return currentNumber;
}
