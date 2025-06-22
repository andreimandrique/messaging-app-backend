import { Router } from "express";
import { registerPost } from "../controllers/registerController.js";

const registerRouter = new Router();

registerRouter.post("/", registerPost);

export default registerRouter;
