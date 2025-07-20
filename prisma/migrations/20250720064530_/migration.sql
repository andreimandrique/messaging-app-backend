/*
  Warnings:

  - Changed the type of `user_a` on the `Friend` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user_b` on the `Friend` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user_a` on the `Friend_Request` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user_b` on the `Friend_Request` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Friend" DROP COLUMN "user_a",
ADD COLUMN     "user_a" INTEGER NOT NULL,
DROP COLUMN "user_b",
ADD COLUMN     "user_b" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Friend_Request" DROP COLUMN "user_a",
ADD COLUMN     "user_a" INTEGER NOT NULL,
DROP COLUMN "user_b",
ADD COLUMN     "user_b" INTEGER NOT NULL;
