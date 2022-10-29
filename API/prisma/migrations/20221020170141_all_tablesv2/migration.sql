/*
  Warnings:

  - You are about to drop the column `price` on the `Seat` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Seat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "row" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "sectorId" INTEGER NOT NULL,
    CONSTRAINT "Seat_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Seat" ("id", "number", "row", "sectorId") SELECT "id", "number", "row", "sectorId" FROM "Seat";
DROP TABLE "Seat";
ALTER TABLE "new_Seat" RENAME TO "Seat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
