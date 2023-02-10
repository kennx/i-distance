import Head from "next/head";
import type { AppProps } from "next/app";
import { getActiviies } from "../lib/activities";

import { ActivityInterface } from "../scripts/activity.interface";

type data = {
  activities: Array<ActivityInterface>;
};

interface PageProps extends AppProps {
  data: data;
}

export default function Home(props: PageProps) {
  const { activities } = props.data;
  return (
    <div>
      <Head>
        <title>iDistance</title>
      </Head>
      {activities.map(activity => (<div key={activity.activity_id}>{activity.name}</div>))}
    </div>
  );
}

export async function getStaticProps() {
  const activities = await getActiviies();
  return {
    props: {
      data: {
        activities,
      },
    },
  };
}
