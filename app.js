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

import rootSocketController from "./controllers/rootSocketController.js";
import userSocketController from "./controllers/userSocketController.js";

rootSocketController(io.of("/"));
userSocketController(io.of("/user"));

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
