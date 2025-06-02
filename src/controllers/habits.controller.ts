import type { Request, Response } from "express";

import { habitModel } from "../models/habit.model";

export class HabitsController {
  store = async (request: Request, response: Response) => {
    const { name } = request.body;

    const findHabit = await habitModel.findOne({
      name,
    });

    if (findHabit) {
      return response.status(400).json({ messege: "habith arleady exists." });
    }

    const newHabits = await habitModel.create({
      name,
      completedDates: [],
    });

    return response.status(201).json(newHabits);
  };
}
