-- CreateTable
CREATE TABLE "Friend" (
    "friend_id" SERIAL NOT NULL,
    "user_a" TEXT NOT NULL,
    "user_b" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("friend_id")
);

-- CreateTable
CREATE TABLE "Friend_Request" (
    "friend_reqest_id" SERIAL NOT NULL,
    "user_a" TEXT NOT NULL,
    "user_b" TEXT NOT NULL,
    "requested_by" INTEGER NOT NULL,

    CONSTRAINT "Friend_Request_pkey" PRIMARY KEY ("friend_reqest_id")
);
