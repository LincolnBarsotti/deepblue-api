/*
  Warnings:

  - The primary key for the `login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `login` table. The data in that column could be lost. The data in that column will be cast from `Char(36)` to `Int`.
  - A unique constraint covering the columns `[userId]` on the table `Login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `login` DROP PRIMARY KEY,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birthday` DATE NOT NULL,
    `loginId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_loginId_key`(`loginId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Login_userId_key` ON `Login`(`userId`);

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `login` RENAME INDEX `login_email_key` TO `Login_email_key`;
