/*
  Warnings:

  - Changed the type of `Max` on the `WeatherData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Min` on the `WeatherData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Temp` on the `WeatherData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "WeatherData" DROP COLUMN "Max",
ADD COLUMN     "Max" INTEGER NOT NULL,
DROP COLUMN "Min",
ADD COLUMN     "Min" INTEGER NOT NULL,
DROP COLUMN "Temp",
ADD COLUMN     "Temp" INTEGER NOT NULL;
