import { PrismaClient } from "@prisma/client";
import { SummaryActivity } from "strava";
import { ActivityInterface } from "./activity.interface";

export async function recordActivity(activity: SummaryActivity) {
  const prisma = new PrismaClient();
  const data: ActivityInterface = {
    activity_id: activity.id,
    name: activity.name,
    distance: activity.distance,
    moving_time: activity.moving_time,
    average_heartrate: activity.average_heartrate,
    average_speed: activity.average_speed,
    type: activity.type,
    start_date_local: activity.start_date_local,
    start_date: activity.start_date,
    location_country: activity.location_country,
    map_summary_polyline: activity.map?.summary_polyline,
  };
  const result = await prisma.activities.upsert({
    where: { activity_id: activity.id },
    update: {
      ...data
    },
    create: {
      ...data
    }
  });
  console.log(result);
}
