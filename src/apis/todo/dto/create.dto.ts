import * as zod from "zod";

// dto type
export type CreateTodoDto = zod.infer<typeof CreateTodoDto>;

// dto
export const CreateTodoDto = zod.object({
  todo: zod.string().min(1).trim(),
  completed: zod.boolean().optional(),
});
