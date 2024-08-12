/*
  Warnings:

  - You are about to drop the column `patientName` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `totalPayableAmount` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `payerType` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `person` table. All the data in the column will be lost.
  - Added the required column `personId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstName` on table `person` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Membership" AS ENUM ('NonMember', 'RegisterdMember', 'RegularMember', 'PremiumMember');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Patient', 'FrontDesk', 'BackOffice', 'Doctor', 'Admin', 'Owner');

-- DropIndex
DROP INDEX "person_username_key";

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "patientName",
DROP COLUMN "phoneNumber",
DROP COLUMN "totalPayableAmount",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "personId" UUID NOT NULL,
ADD COLUMN     "totalAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "person" DROP COLUMN "payerType",
DROP COLUMN "username",
ADD COLUMN     "membership" "Membership" NOT NULL DEFAULT 'NonMember',
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Patient',
ALTER COLUMN "firstName" SET NOT NULL;

-- DropEnum
DROP TYPE "discount_type";

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
