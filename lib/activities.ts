import { PrismaClient } from "@prisma/client";

export async function getActiviies() {
  const prisma = new PrismaClient();
  try {
    const allData = await prisma.activities.findMany();
    const activities = JSON.stringify(allData, (_, value) =>
      typeof value === "bigint" ? Number(BigInt(value)) : value
    );
    return JSON.parse(activities);
  } catch (error) {
    console.log("error:", "❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌", error);
    prisma.$disconnect();
  }
}
