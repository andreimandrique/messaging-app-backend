import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function rootSocketController(io) {
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

    const username = socket.user.username;

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
    });

    socket.on("leaveRoom", (roomId) => {
      socket.leave(roomId);
    });

    socket.on("messageRoom", ({ roomId, message }) => {
      io.to(roomId).emit("receiveMessage", message, username);
    });

    socket.on("disconnect", () => console.log(`user disconnect ${socket.id}`));
  });
}

export default rootSocketController;
