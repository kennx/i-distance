import { PrismaClient } from "@prisma/client";

export async function recordActivity(activity: { [key: string]: any }) {
  const prismaClient = new PrismaClient();
  const result = await prismaClient.user.findFirst({
    where: { id: activity.run_id },
  });
  if (!result) {
    const newActivity = await prismaClient.user.create({
      data: {
        name: activity.name,
        email: activity.email,
      },
    });
    console.log(`✅ ${newActivity.id} ${newActivity.email}`);
  }
}
