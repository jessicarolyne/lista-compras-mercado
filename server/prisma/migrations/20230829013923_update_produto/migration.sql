-- AlterTable
ALTER TABLE "ListaProduto" ADD COLUMN "preco" DECIMAL;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "menorPreco" DECIMAL,
    "mercadoID" TEXT,
    CONSTRAINT "Produto_mercadoID_fkey" FOREIGN KEY ("mercadoID") REFERENCES "Mercado" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("id", "name") SELECT "id", "name" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
