import { fetchActivities } from "./strava";

fetchActivities()
  .then(() => console.log("Complete!"))
  .catch((err) => console.log(err));
