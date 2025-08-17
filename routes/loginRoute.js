import { Router } from "express";
import { loginPost } from "../controllers/loginController.js";
import limiter from "../middlewares/limiter.js";

const loginRouter = new Router();

loginRouter.post("/", limiter, loginPost);

export default loginRouter;
