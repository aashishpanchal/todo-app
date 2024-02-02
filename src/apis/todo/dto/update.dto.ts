import * as z from "zod";
import {CreateTodoDto} from "./create.dto";

// dto type
export type UpdateTodoDto = z.infer<typeof UpdateTodoDto>;

// dto
export const UpdateTodoDto = CreateTodoDto.partial();
