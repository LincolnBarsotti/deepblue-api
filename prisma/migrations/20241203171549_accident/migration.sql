-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birthday` DATE NOT NULL,
    `loginId` INTEGER NOT NULL,

    UNIQUE INDEX `User_loginId_key`(`loginId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Login_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Incidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Numero` VARCHAR(191) NOT NULL,
    `Empresa` VARCHAR(191) NOT NULL,
    `Data_de_criacao` DATE NOT NULL,
    `Autoridades_comunicadas` VARCHAR(191) NULL,
    `Instalacao` VARCHAR(191) NOT NULL,
    `Data_da_primeira_observacao` DATE NOT NULL,
    `Hora_da_primeira_observacao` VARCHAR(191) NOT NULL,
    `Data_estimada_do_incidente` DATE NOT NULL,
    `Hora_do_incidente` VARCHAR(191) NOT NULL,
    `Numero_de_feridos_graves` INTEGER NOT NULL,
    `Numero_de_fatalidades` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accident` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `situacao` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `resolucaoResponsavel` VARCHAR(191) NOT NULL,
    `resolucaoData` DATETIME(3) NOT NULL,
    `resolucaoDescricao` VARCHAR(191) NOT NULL,
    `resolucaoCustoTotal` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_loginId_fkey` FOREIGN KEY (`loginId`) REFERENCES `Login`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
