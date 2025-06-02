import type { ZodIssue } from "zod";

export function buildValidationErrorMessege(issues: ZodIssue[]): string[] {
  const errors = issues.map((item) => `${item.path.join(".")}: ${item.message}`);

  return errors;
}
