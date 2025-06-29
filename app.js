import express from "express";
import http from "http";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined room ${roomId}`);
  });

  socket.on("leaveRoom", (roomId) => {
    socket.leave(roomId);
    console.log(`${socket.id} left room ${roomId}`);
  });

  socket.on("messageRoom", ({ roomId, message }) => {
    console.log(`${roomId} ${message}`);
    io.to(roomId).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => console.log(`user disconnect ${socket.id}`));
});

app.use(express.json());

import indexRouter from "./routes/indexRoute.js";
import registerRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";

app.get("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
