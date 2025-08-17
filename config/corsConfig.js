import dotenv from "dotenv";

dotenv.config();

const corsConfig = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  credentials: true,
};

export default corsConfig;
