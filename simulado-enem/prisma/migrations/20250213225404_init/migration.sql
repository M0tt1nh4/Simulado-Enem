-- CreateTable
CREATE TABLE "User" (
    "idUsuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilPublico" BOOLEAN NOT NULL DEFAULT false,
    "bio" TEXT,
    "tipoUsuario" TEXT NOT NULL,
    "experiencia" INTEGER NOT NULL DEFAULT 0,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "dataRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataUltimoAcesso" TIMESTAMP(3) NOT NULL,
    "diasConsecutivos" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Offline',

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUsuario")
);
