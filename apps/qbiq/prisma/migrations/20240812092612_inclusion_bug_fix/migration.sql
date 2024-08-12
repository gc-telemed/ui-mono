/*
  Warnings:

  - Added the required column `receiverId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `verification_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "receiverId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "verification_token" ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "verification_token" ADD CONSTRAINT "verification_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
