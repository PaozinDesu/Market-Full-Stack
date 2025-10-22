/*
  Warnings:

  - You are about to drop the column `image` on the `product_option` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN "image" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product_option" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "fk_product" TEXT NOT NULL,
    CONSTRAINT "product_option_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_product_option" ("fk_product", "id", "name") SELECT "fk_product", "id", "name" FROM "product_option";
DROP TABLE "product_option";
ALTER TABLE "new_product_option" RENAME TO "product_option";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
