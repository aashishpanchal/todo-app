import React from "react";
import type {Todo} from "@/types/todo.type";
import {TodoContext} from "@/contexts/todo.context";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  toggleTodo,
} from "@/http/apis/todo.api";

export function TodoProvider({children}: React.PropsWithChildren) {
  const [todo, setTodo] = React.useState<Todo[]>([]);

  const handleAddTodo = async (task: string) => {
    const {
      data: {data},
    } = await createTodo(task);
    // update data in state
    setTodo((prev) => [...prev, data]);
  };

  const handleTodoCompleted = async (id: string, check: boolean) => {
    const {
      data: {data},
    } = await toggleTodo(id, check);
    // update data in state
    setTodo((prev) => prev.map((item) => (item.id === id ? data : item)));
  };

  const handleTodoDelete = async (id: string) => {
    // delete todo
    await deleteTodo(id);
    // update data in state
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    getAllTodo().then(({data: {data = []}}) => setTodo(data));
  }, []);

  return (
    <TodoContext.Provider
      value={{todo, handleAddTodo, handleTodoCompleted, handleTodoDelete}}
    >
      {children}
    </TodoContext.Provider>
  );
}
