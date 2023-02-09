import { Strava } from "strava";
import type { SummaryActivity } from "strava";
import { refreshTokenRequest } from "./config";

type activitiesRequest = {
  before?: number;
  after?: number;
  page?: number;
  per_page?: number;
};

const strava = new Strava(refreshTokenRequest);

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function fetchActivities(params?: activitiesRequest) {
  const filter: activitiesRequest = params || { page: 1, per_page: 30 };
  filter.page = filter.page || 1;
  filter.per_page = filter.per_page || 30;

  const activities: Array<SummaryActivity> = [];
  let loop = true;
  while (loop) {
    const data = await strava.activities.getLoggedInAthleteActivities(filter);
    loop = !!data.length;
    activities.push(...data.filter((activity) => activity.type === "Run"));
    console.log(`✅ page: ${filter.page}`);
    filter.page = filter.page + 1;
    await delay(1000);
  }
  console.log(`activities: ${activities.length}`);
  return activities;
}
