import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const registerPost = async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username is required" });
  }

  if (!password) {
    return res.status(400).json({ error: "password is required" });
  }

  if (!confirmPassword) {
    return res.status(400).json({ error: "confirm password is required" });
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "password and confirm password do not match" });
  }

  try {
    await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    res.status(201).json({ message: "user successfully created" });
  } catch (error) {
    res.status(500).json({ error: "username already exist" });
  }
};

export { registerPost };
