/*
  Warnings:

  - The `deletedAt` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `deletedAt`,
    ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `deletedAt` DATETIME(3) NULL;
