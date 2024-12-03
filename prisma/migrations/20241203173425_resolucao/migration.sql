/*
  Warnings:

  - You are about to drop the `accident` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `accident`;

-- CreateTable
CREATE TABLE `Acidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `situacao` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resolucao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `responsavel` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `custo_total` DOUBLE NOT NULL,
    `acidenteId` INTEGER NOT NULL,

    UNIQUE INDEX `Resolucao_acidenteId_key`(`acidenteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resolucao` ADD CONSTRAINT `Resolucao_acidenteId_fkey` FOREIGN KEY (`acidenteId`) REFERENCES `Acidente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
