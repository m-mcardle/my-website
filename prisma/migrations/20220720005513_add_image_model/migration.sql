-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "path" TEXT NOT NULL DEFAULT 'NotFound.png',
    "description" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
