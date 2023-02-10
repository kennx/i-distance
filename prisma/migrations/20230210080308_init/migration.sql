/*
  Warnings:

  - You are about to alter the column `activity_id` on the `activities` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_activities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activity_id" BIGINT NOT NULL,
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
INSERT INTO "new_activities" ("activity_id", "average_heartrate", "average_speed", "distance", "id", "location_country", "map_summary_polyline", "moving_time", "name", "start_date", "start_date_local", "type") SELECT "activity_id", "average_heartrate", "average_speed", "distance", "id", "location_country", "map_summary_polyline", "moving_time", "name", "start_date", "start_date_local", "type" FROM "activities";
DROP TABLE "activities";
ALTER TABLE "new_activities" RENAME TO "activities";
CREATE UNIQUE INDEX "activities_activity_id_key" ON "activities"("activity_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
