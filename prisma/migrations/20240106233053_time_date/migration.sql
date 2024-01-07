/*
  Warnings:

  - You are about to drop the column `idUser` on the `Reminders` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Reminders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reminders" DROP COLUMN "idUser",
ADD COLUMN     "userId" TEXT NOT NULL;
