-- CreateTable
CREATE TABLE "Votes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "candidateName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userSurname" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
