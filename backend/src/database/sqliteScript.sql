-- Creator:       MySQL Workbench 8.0.34/ExportSQLite Plugin 0.1.0
-- Author:        For Example John
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2024-02-29 15:06
-- Created:       2024-02-29 15:06
PRAGMA foreign_keys = OFF;

BEGIN;
CREATE TABLE "User"(
  "Id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "Username" VARCHAR(45) NOT NULL,
  "Password" TEXT NOT NULL,
  "Email" VARCHAR(150) NOT NULL,
  "DateOfBirth" DATE NOT NULL,
  CONSTRAINT "email_UNIQUE"
    UNIQUE("Email"),
  CONSTRAINT "username_UNIQUE"
    UNIQUE("Username")
);
CREATE TABLE "Games"(
  "Id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "Name" VARCHAR(60) NOT NULL,
  "ImgPath" VARCHAR(200)
);
CREATE TABLE "ELO"(
  "UserId" INTEGER NOT NULL,
  "GamesId" INTEGER NOT NULL,
  "Elo" INTEGER NOT NULL,
  CONSTRAINT "fk_ELO_User"
    FOREIGN KEY("UserId")
    REFERENCES "User"("Id"),
  CONSTRAINT "fk_ELO_Games1"
    FOREIGN KEY("GamesId")
    REFERENCES "Games"("Id")
);
CREATE INDEX "ELO.fk_ELO_User_idx" ON "ELO" ("UserId");
CREATE INDEX "ELO.fk_ELO_Games1_idx" ON "ELO" ("GamesId");
CREATE TABLE "ActivityLog"(
  "Id" INTEGER PRIMARY KEY NOT NULL,
  "UserId" INTEGER NOT NULL,
  "Resource" VARCHAR(250),
  "RequestType" TEXT,
  "Body" TEXT,
  "DateTime" DATETIME,
  CONSTRAINT "fk_ActivityLog_User1"
    FOREIGN KEY("UserId")
    REFERENCES "User"("Id")
);
CREATE INDEX "ActivityLog.fk_ActivityLog_User1_idx" ON "ActivityLog" ("UserId");
COMMIT;
