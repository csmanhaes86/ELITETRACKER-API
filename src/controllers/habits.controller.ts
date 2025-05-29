import type { Request, Response } from "express";


export class HabitsController {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private readonly habits: any[] = []

  store = (request: Request, response: Response): Response => {
    const { name } = request.body;

    const newHabits = name;

    this.habits.push(newHabits);

    return response.status(201).json(newHabits);
  }
}