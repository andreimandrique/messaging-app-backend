import { Router } from "express";
import { verifyGet } from "../controllers/verifyController.js";

const verifyRouter = new Router();

verifyRouter.get("/", verifyGet);

export default verifyRouter;
