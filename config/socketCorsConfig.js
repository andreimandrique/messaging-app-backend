import dotenv from "dotenv";

dotenv.config();

const socketCorsConfig = {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
};

export default socketCorsConfig;
