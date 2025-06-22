import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

import indexRouter from "./routes/indexRoute.js";
import registerRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";

app.get("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
