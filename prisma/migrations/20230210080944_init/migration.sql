/*
  Warnings:

  - The primary key for the `activities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `activities` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_activities" (
    "activity_id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "distance" REAL,
    "moving_time" INTEGER,
    "average_speed" REAL,
    "average_heartrate" REAL,
    "type" TEXT,
    "start_date_local" DATETIME,
    "start_date" DATETIME,
    "location_country" TEXT,
    "map_summary_polyline" TEXT
);
INSERT INTO "new_activities" ("activity_id", "average_heartrate", "average_speed", "distance", "location_country", "map_summary_polyline", "moving_time", "name", "start_date", "start_date_local", "type") SELECT "activity_id", "average_heartrate", "average_speed", "distance", "location_country", "map_summary_polyline", "moving_time", "name", "start_date", "start_date_local", "type" FROM "activities";
DROP TABLE "activities";
ALTER TABLE "new_activities" RENAME TO "activities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
