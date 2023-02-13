import Head from "next/head";
import type { AppProps } from "next/app";
import { getActiviies } from "../lib/activities";

import { ActivityInterface } from "../scripts/activity.interface";

import mapboxgl, { Map, MapboxEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import polyline from "@mapbox/polyline";

type data = {
  activities: Array<ActivityInterface>;
};

interface PageProps extends AppProps {
  data: data;
}

export default function Home(props: PageProps) {
  const { activities } = props.data;
  const activity = activities[0];

  const geo = polyline.toGeoJSON(activity.map_summary_polyline!);

  const mapContainer = useRef<HTMLDivElement | any>(null);
  const map = useRef<Map | any>(null);

  useEffect(() => {
    const center = geo.coordinates[Math.floor(geo.coordinates.length/2)]
    console.log(center);
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2Vubng5IiwiYSI6ImNrbGZ6Z3M5NDFhcmwyc21nb285ZzFvZ2gifQ.0nEN9rPZVrPUPnmTBvU7-A";
    map.current = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [center[0], center[1]],
      zoom: 12,
    });

    map.current.on("load", (e: MapboxEvent) => {
      const target: Map = e.target;
      mapContainer.current.style.height = "500px";
      target.resize();

      target.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            ...geo,
          },
        },
      });

      target.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red",
          "line-width": 4,
        },
      });
    });
  }, [geo]);

  return (
    <div>
      <Head>
        <title>iDistance</title>
      </Head>
      <div className="map-container" ref={mapContainer} />
      {activities.map((activity) => (
        <div key={activity.activity_id}>{activity.name}</div>
      ))}
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
