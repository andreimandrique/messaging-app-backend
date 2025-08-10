import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();
const server = createServer(app);

import socketCorsConfig from "./config/socketCorsConfig.js";
const io = new Server(server, socketCorsConfig);

import rootSocketController from "./socket/rootSocketController.js";
rootSocketController(io.of("/"));

import corsConfig from "./config/corsConfig.js";
app.use(cors(corsConfig));
app.use(express.json());

import indexRouter from "./routes/indexRoute.js";
import registerRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";
import verifyRouter from "./routes/verifyRoute.js";

app.get("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/verify", verifyRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
