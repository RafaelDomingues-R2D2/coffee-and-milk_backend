/*
  Warnings:

  - You are about to drop the column `cart` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "cart",
ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true;
