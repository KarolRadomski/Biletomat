/*
  Warnings:

  - You are about to drop the column `reserved` on the `SectorDetail` table. All the data in the column will be lost.
  - You are about to drop the column `seatId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatInSectorId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "SeatInSector" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "seatId" INTEGER NOT NULL,
    "sectorDetailId" INTEGER NOT NULL,
    CONSTRAINT "SeatInSector_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SeatInSector_sectorDetailId_fkey" FOREIGN KEY ("sectorDetailId") REFERENCES "SectorDetail" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SectorDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "sectorId" INTEGER NOT NULL,
    CONSTRAINT "SectorDetail_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SectorDetail_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SectorDetail" ("eventId", "id", "price", "sectorId") SELECT "eventId", "id", "price", "sectorId" FROM "SectorDetail";
DROP TABLE "SectorDetail";
ALTER TABLE "new_SectorDetail" RENAME TO "SectorDetail";
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'DESC',
    "placeId" INTEGER NOT NULL,
    CONSTRAINT "Event_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("id", "name", "placeId") SELECT "id", "name", "placeId" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "QRCodeURL" TEXT NOT NULL,
    "seatInSectorId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    CONSTRAINT "Ticket_seatInSectorId_fkey" FOREIGN KEY ("seatInSectorId") REFERENCES "SeatInSector" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ticket_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("QRCodeURL", "eventId", "id", "orderId") SELECT "QRCodeURL", "eventId", "id", "orderId" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
CREATE UNIQUE INDEX "Ticket_seatInSectorId_key" ON "Ticket"("seatInSectorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
