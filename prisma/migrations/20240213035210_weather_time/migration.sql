/*
  Warnings:

  - You are about to drop the `WeatherUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_WeatherDataToWeatherUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_WeatherDataToWeatherUser" DROP CONSTRAINT "_WeatherDataToWeatherUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_WeatherDataToWeatherUser" DROP CONSTRAINT "_WeatherDataToWeatherUser_B_fkey";

-- DropTable
DROP TABLE "WeatherUser";

-- DropTable
DROP TABLE "_WeatherDataToWeatherUser";

-- CreateTable
CREATE TABLE "WeatherInfo" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "lng" INTEGER NOT NULL,
    "lat" INTEGER NOT NULL,
    "icon" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "temp" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "min" INTEGER NOT NULL,
    "pressure" INTEGER NOT NULL,
    "humidity" INTEGER NOT NULL,
    "wind" INTEGER NOT NULL,
    "sunrise" INTEGER NOT NULL,
    "sunset" INTEGER NOT NULL,
    "feels_like" INTEGER NOT NULL,

    CONSTRAINT "WeatherInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WeatherDataToWeatherInfo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WeatherDataToWeatherInfo_AB_unique" ON "_WeatherDataToWeatherInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_WeatherDataToWeatherInfo_B_index" ON "_WeatherDataToWeatherInfo"("B");

-- AddForeignKey
ALTER TABLE "_WeatherDataToWeatherInfo" ADD CONSTRAINT "_WeatherDataToWeatherInfo_A_fkey" FOREIGN KEY ("A") REFERENCES "WeatherData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WeatherDataToWeatherInfo" ADD CONSTRAINT "_WeatherDataToWeatherInfo_B_fkey" FOREIGN KEY ("B") REFERENCES "WeatherInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
