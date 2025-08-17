import { Router } from "express";
import { registerPost } from "../controllers/registerController.js";
import limiter from "../middlewares/limiter.js";

const registerRouter = new Router();

registerRouter.post("/", limiter, registerPost);

export default registerRouter;
