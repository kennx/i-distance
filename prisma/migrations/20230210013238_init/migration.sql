-- CreateTable
CREATE TABLE "activities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "distance" REAL,
    "moving_time" REAL,
    "average_speed" INTEGER,
    "average_heartrate" INTEGER,
    "type" TEXT,
    "start_date_local" DATETIME,
    "start_date" DATETIME,
    "location_country" TEXT,
    "map_summary_polyline" TEXT
);
