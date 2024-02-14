/*
  Warnings:

  - You are about to drop the column `cityInfo` on the `WeatherData` table. All the data in the column will be lost.
  - Added the required column `Max` to the `WeatherData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Min` to the `WeatherData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Temp` to the `WeatherData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityName` to the `WeatherData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `WeatherData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `WeatherData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeatherData" DROP COLUMN "cityInfo",
ADD COLUMN     "Max" TEXT NOT NULL,
ADD COLUMN     "Min" TEXT NOT NULL,
ADD COLUMN     "Temp" TEXT NOT NULL,
ADD COLUMN     "cityName" TEXT NOT NULL,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "icon" TEXT NOT NULL;
