-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "menorPreco" DECIMAL,
    "mercadoID" TEXT,
    CONSTRAINT "Produto_mercadoID_fkey" FOREIGN KEY ("mercadoID") REFERENCES "Mercado" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lista" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Lista_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ListaProduto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produtoID" TEXT NOT NULL,
    "mercadoID" TEXT NOT NULL,
    "listaID" TEXT NOT NULL,
    "dataCompra" DATETIME NOT NULL,
    "dataInicioConsumo" DATETIME NOT NULL,
    "dataFimConsumo" DATETIME NOT NULL,
    "dataVencimento" DATETIME NOT NULL,
    "preco" DECIMAL,
    CONSTRAINT "ListaProduto_produtoID_fkey" FOREIGN KEY ("produtoID") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ListaProduto_mercadoID_fkey" FOREIGN KEY ("mercadoID") REFERENCES "Mercado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ListaProduto_listaID_fkey" FOREIGN KEY ("listaID") REFERENCES "Lista" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
