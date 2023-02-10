export interface ActivityInterface {
  activity_id: number;
  name?: string;
  distance?: number;
  moving_time?: number;
  average_speed?: number;
  average_heartrate?: number;
  type?: string;
  start_date_local?: string;
  start_date?: string;
  location_country?: string;
  map_summary_polyline?: string;
}