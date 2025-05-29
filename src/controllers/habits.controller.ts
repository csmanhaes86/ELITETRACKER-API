import type { Request, Response } from "express";

import { habitModel } from "../models/habit.model";

export class HabitsController {
  store = async (request: Request, response: Response) => {
    const { name } = request.body;

    const newHabits = await habitModel.create({
      name,
      completedDates: [],
    });

    return response.status(201).json(newHabits);
  };
}
