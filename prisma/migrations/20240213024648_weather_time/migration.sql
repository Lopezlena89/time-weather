-- CreateTable
CREATE TABLE "WeatherData" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WeatherData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherUser" (
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

    CONSTRAINT "WeatherUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WeatherDataToWeatherUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WeatherDataToWeatherUser_AB_unique" ON "_WeatherDataToWeatherUser"("A", "B");

-- CreateIndex
CREATE INDEX "_WeatherDataToWeatherUser_B_index" ON "_WeatherDataToWeatherUser"("B");

-- AddForeignKey
ALTER TABLE "_WeatherDataToWeatherUser" ADD CONSTRAINT "_WeatherDataToWeatherUser_A_fkey" FOREIGN KEY ("A") REFERENCES "WeatherData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WeatherDataToWeatherUser" ADD CONSTRAINT "_WeatherDataToWeatherUser_B_fkey" FOREIGN KEY ("B") REFERENCES "WeatherUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
