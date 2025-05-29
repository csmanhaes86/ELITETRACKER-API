import { Router } from "express";
import { HabitsController } from "./controllers/habits.controller";

import packageJson from "../package.json";

export const routes = Router();

const habitsController = new HabitsController();

routes.get("/", (request, response) => {
  const { name, description, version } = packageJson;

  response.status(200).json({ name, description, version });
});
// @ts-ignore
routes.post("/habits", habitsController.store);
