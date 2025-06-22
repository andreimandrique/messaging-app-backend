import { Router } from "express";
import { indexGet } from "../controllers/indexController.js";

const indexRouter = new Router();

indexRouter.get("/", indexGet);

export default indexRouter;
