/*
  Warnings:

  - You are about to drop the column `Imagem` on the `filmes` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_filmes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "personagensPrincipais" TEXT NOT NULL,
    "dataLancamento" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_filmes" ("createdAt", "dataLancamento", "id", "personagensPrincipais", "sinopse", "titulo", "updatedAt") SELECT "createdAt", "dataLancamento", "id", "personagensPrincipais", "sinopse", "titulo", "updatedAt" FROM "filmes";
DROP TABLE "filmes";
ALTER TABLE "new_filmes" RENAME TO "filmes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
