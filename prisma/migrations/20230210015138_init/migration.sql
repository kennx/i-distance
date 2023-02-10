/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `activities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "activities_id_key" ON "activities"("id");
