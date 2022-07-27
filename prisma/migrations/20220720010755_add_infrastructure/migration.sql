-- CreateTable
CREATE TABLE "_ImageToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToProject_AB_unique" ON "_ImageToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToProject_B_index" ON "_ImageToProject"("B");

-- AddForeignKey
ALTER TABLE "_ImageToProject" ADD CONSTRAINT "_ImageToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToProject" ADD CONSTRAINT "_ImageToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
