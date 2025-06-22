import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig.js";
import dotenv from "dotenv";

const prisma = new PrismaClient();

dotenv.config();

const loginPost = async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  if (!password) {
    return res.status(400).json({ error: "password is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "username does not exist" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "wrong password" });
    }

    const { password: _, ...userWithoutPassword } = user;

    jwt.sign(
      userWithoutPassword,
      process.env.JWT_SECRET,
      jwtConfig,
      (error, token) => {
        if (error) {
          return res
            .status(400)
            .json({ error: "there is an error generating jwt token" });
        }

        res.status(200).json({ token });
      }
    );
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { loginPost };
