/*
  Warnings:

  - You are about to drop the column `path` on the `Tech` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Tech` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tech" DROP COLUMN "path",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL DEFAULT 'NotFound.png',
    "alt" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tech" ADD CONSTRAINT "Tech_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
