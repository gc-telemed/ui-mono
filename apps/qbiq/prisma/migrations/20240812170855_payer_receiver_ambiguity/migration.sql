/*
  Warnings:

  - You are about to drop the column `personId` on the `payment` table. All the data in the column will be lost.
  - Added the required column `payerId` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_personId_fkey";

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "personId",
ADD COLUMN     "payerId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
