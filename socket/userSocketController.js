import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function userSocketController(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (error) {
      return next(new Error("invalid or expired token"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);

    console.log(socket.user);

    socket.on("message", (msg) => {
      io.emit("message", msg);
    });

    socket.on("disconnect", () => console.log(`user disconnect ${socket.id}`));
  });
}

export default userSocketController;
