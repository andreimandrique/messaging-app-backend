import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

import rootSocketController from "./socket/rootSocketController.js";
rootSocketController(io.of("/"));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

import indexRouter from "./routes/indexRoute.js";
import registerRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";

app.get("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
