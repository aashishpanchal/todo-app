import * as z from "zod";

// dto type
export type TodoDto = z.infer<typeof TodoDto>;

// dto
export const TodoDto = z
  .object({
    id: z.string(),
    todo: z.string(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .partial();
