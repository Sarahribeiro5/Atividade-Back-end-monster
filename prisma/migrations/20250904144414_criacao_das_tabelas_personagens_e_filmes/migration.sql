/*
  Warnings:

  - You are about to drop the `animes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `age` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `anime` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `power` on the `personagens` table. All the data in the column will be lost.
  - Added the required column `características` to the `personagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `personagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `personagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cards_name_key";

-- DropIndex
DROP INDEX "collections_name_key";

-- DropIndex
DROP INDEX "users_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "animes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cards";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "collections";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "filmes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "personagensPrincipais" TEXT NOT NULL,
    "dataLancamento" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "características" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_personagens" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "personagens";
DROP TABLE "personagens";
ALTER TABLE "new_personagens" RENAME TO "personagens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
