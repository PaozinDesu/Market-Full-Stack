/*
  Warnings:

  - You are about to drop the column `image` on the `product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "product_option" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fk_product" TEXT NOT NULL,
    CONSTRAINT "product_option_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_product" ("description", "id", "name", "price") SELECT "description", "id", "name", "price" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
