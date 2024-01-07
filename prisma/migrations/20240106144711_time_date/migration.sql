-- CreateTable
CREATE TABLE "Reminders" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "Reminders_pkey" PRIMARY KEY ("id")
);
