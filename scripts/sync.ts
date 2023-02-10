import { recordActivity } from "./record-activity";
import { fetchActivities } from "./strava";

fetchActivities()
  .then(async (activities) => {
    activities.map(async (activity, i) => {
      try {
        await recordActivity(activity);
        console.log(
          "✅",
          `${i + 1}/${activities.length}`,
          activity.id,
          activity.name
        );
      } catch (error) {
        console.error(
          "❌",
          `${i}/${activities.length}`,
          activity.id,
          activity.name,
          error?.toString(),
        );
      }
    });
    // for (let i = 0; i < activities.length; i++) {
    //   const activity = activities[i];
    //   recordActivity(activity)
    //     .then(() =>
    //       console.log(
    //         "✅",
    //         `${i}/${activities.length}`,
    //         activity.id,
    //         activity.name
    //       )
    //     )
    //     .catch((err) =>
    //       console.log(
    //         "❌",
    //         `${i}/${activities.length}`,
    //         activity.id,
    //         activity.id,
    //         err.toString()
    //       )
    //     );
    // }
  })
  .catch((err) => console.log(err));
