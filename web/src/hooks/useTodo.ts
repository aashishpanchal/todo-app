import {useContext} from "react";
import {TodoContext} from "@/contexts/todo.context";

export function useTodo() {
  const todoContextValue = useContext(TodoContext);

  if (!todoContextValue) throw new Error("UseTodo used outside of provider");

  return todoContextValue;
}
