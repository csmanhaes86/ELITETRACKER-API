import type { Request, Response } from "express";

import { z } from "zod";

import { habitModel } from "../models/habit.model";
import { buildValidationErrorMessege } from "../utils/buid-validation-error-messege.utils";

export class HabitsController {
  store = async (request: Request, response: Response) => {
    const schema = z.object({
      name: z.string(),
    });

    const { name } = request.body;

    const habit = schema.safeParse(request.body);

    if (!habit.success) {
      const errors = buildValidationErrorMessege(habit.error.issues);

      return response.status(422).json({ messege: errors });
    }

    const findHabit = await habitModel.findOne({
      name: habit.data.name,
    });

    if (findHabit) {
      return response.status(400).json({ messege: "habith arleady exists." });
    }

    const newHabits = await habitModel.create({
      name: habit.data.name,
      completedDates: [],
    });

    return response.status(201).json(newHabits);
  };
}
