/*
  Warnings:

  - Added the required column `company` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "job" TEXT NOT NULL,
ADD COLUMN     "link" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "Goal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "outcome" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    "reportId" INTEGER,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;
