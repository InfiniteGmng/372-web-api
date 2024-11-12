import { Router } from "express";
import { getJokes } from "./../controllers/jokesController.js";

const jokesRouter = Router();

jokesRouter.get("/", getJokes);

export default jokesRouter;
