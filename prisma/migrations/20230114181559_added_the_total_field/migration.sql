/*
  Warnings:

  - The `price` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `description` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "total" DOUBLE PRECISION NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0.00;
