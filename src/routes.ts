import { Router } from "express";

import packgeJson from "../package.json";

export const routes = Router();

const habits = [];

routes.get("/", (request, response) => {
  const { name, description, version } = packgeJson;

  response.status(200).json({ name, description, version });
});

routes.post("/habits", (request, response) => {
  const { name } = request.body;

  const newHabits = name;

  habits.push(newHabits);

  response.status(201).json(newHabits);
});
