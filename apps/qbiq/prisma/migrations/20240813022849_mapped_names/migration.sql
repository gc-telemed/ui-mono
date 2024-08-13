/*
  Warnings:

  - You are about to drop the `BudEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Budget` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetBudgetUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BudEvent" DROP CONSTRAINT "BudEvent_budUserId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetBudgetUser" DROP CONSTRAINT "BudgetBudgetUser_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetBudgetUser" DROP CONSTRAINT "BudgetBudgetUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetEntry" DROP CONSTRAINT "BudgetEntry_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetEntry" DROP CONSTRAINT "BudgetEntry_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_budgetId_fkey";

-- DropTable
DROP TABLE "BudEvent";

-- DropTable
DROP TABLE "Budget";

-- DropTable
DROP TABLE "BudgetBudgetUser";

-- DropTable
DROP TABLE "BudgetEntry";

-- DropTable
DROP TABLE "BudgetUser";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Service";

-- CreateTable
CREATE TABLE "budget_entry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "serviceId" UUID NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "promotion" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "percentChange" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "budgetId" UUID NOT NULL,

    CONSTRAINT "budget_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fiscalYear" INTEGER NOT NULL,
    "reportId" UUID,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "budgetId" UUID NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "totalDiscount" DOUBLE PRECISION NOT NULL,
    "totalPromotion" DOUBLE PRECISION NOT NULL,
    "totalSubtotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "budget_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_with_budget_user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "budgetId" UUID NOT NULL,
    "role" TEXT NOT NULL,
    "ability" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "budget_with_budget_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryList" TEXT[],
    "metadata" JSONB NOT NULL,
    "budUserId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_budgetId_key" ON "report"("budgetId");

-- CreateIndex
CREATE UNIQUE INDEX "budget_user_email_key" ON "budget_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "budget_with_budget_user_userId_budgetId_key" ON "budget_with_budget_user"("userId", "budgetId");

-- AddForeignKey
ALTER TABLE "budget_entry" ADD CONSTRAINT "budget_entry_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_entry" ADD CONSTRAINT "budget_entry_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_with_budget_user" ADD CONSTRAINT "budget_with_budget_user_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_with_budget_user" ADD CONSTRAINT "budget_with_budget_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "budget_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_event" ADD CONSTRAINT "budget_event_budUserId_fkey" FOREIGN KEY ("budUserId") REFERENCES "budget_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
