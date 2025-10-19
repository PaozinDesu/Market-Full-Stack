-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fk_product" TEXT NOT NULL,
    "fk_category" TEXT NOT NULL,
    CONSTRAINT "product_category_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "product_category_fk_category_fkey" FOREIGN KEY ("fk_category") REFERENCES "category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ip" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "fk_product" TEXT NOT NULL,
    CONSTRAINT "cart_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ip" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "fk_product" TEXT NOT NULL,
    CONSTRAINT "order_fk_product_fkey" FOREIGN KEY ("fk_product") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "product_category_fk_product_fk_category_key" ON "product_category"("fk_product", "fk_category");

-- CreateIndex
CREATE UNIQUE INDEX "cart_ip_fk_product_key" ON "cart"("ip", "fk_product");

-- CreateIndex
CREATE UNIQUE INDEX "order_ip_fk_product_key" ON "order"("ip", "fk_product");
