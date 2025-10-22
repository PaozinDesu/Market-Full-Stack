/*
  Warnings:

  - You are about to drop the column `fk_product` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `order` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "order_item" (
    "quantity" INTEGER NOT NULL,
    "fk_order" TEXT NOT NULL,
    "fk_product" TEXT NOT NULL,
    CONSTRAINT "order_item_fk_order_fkey" FOREIGN KEY ("fk_order") REFERENCES "order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "order_item_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ip" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_order" ("id", "ip", "status") SELECT "id", "ip", "status" FROM "order";
DROP TABLE "order";
ALTER TABLE "new_order" RENAME TO "order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "order_item_fk_order_fk_product_key" ON "order_item"("fk_order", "fk_product");
