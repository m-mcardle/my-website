/*
  Warnings:

  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[path]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_path_key" ON "Image"("path");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
