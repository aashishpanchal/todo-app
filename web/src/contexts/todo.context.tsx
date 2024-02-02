import {createContext} from "react";
import type {Todo} from "@/types/todo.type";

export type TodoContext = {
  todo: Todo[];
  handleAddTodo: (task: string) => void;
  handleTodoDelete: (id: string) => void;
  handleTodoCompleted: (id: string, check: boolean) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);
