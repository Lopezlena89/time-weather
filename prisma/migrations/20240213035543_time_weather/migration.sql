/*
  Warnings:

  - You are about to drop the `WeatherInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_WeatherDataToWeatherInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityInfo` to the `WeatherData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_WeatherDataToWeatherInfo" DROP CONSTRAINT "_WeatherDataToWeatherInfo_A_fkey";

-- DropForeignKey
ALTER TABLE "_WeatherDataToWeatherInfo" DROP CONSTRAINT "_WeatherDataToWeatherInfo_B_fkey";

-- AlterTable
ALTER TABLE "WeatherData" ADD COLUMN     "cityInfo" TEXT NOT NULL;

-- DropTable
DROP TABLE "WeatherInfo";

-- DropTable
DROP TABLE "_WeatherDataToWeatherInfo";
