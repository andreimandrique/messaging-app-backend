import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

import indexRouter from "./routes/indexController.js";
import registerRouter from "./routes/registerRoute.js";

app.get("/", indexRouter);

app.use("/register", registerRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
