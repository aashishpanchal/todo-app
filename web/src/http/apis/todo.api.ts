import toast from "react-hot-toast";
import {api} from "../instance";
import {ApiErrorHandler} from "../error-handler";
// types
import type {Todo} from "@/types/todo.type";
import type {ApiRes} from "@/types/api.type";

// get all todo api
export const getAllTodo = () =>
  toast.promise(api.get<ApiRes<Todo[]>>("/todo"), {
    loading: "Fetching todo...",
    success: "Todo fetched successfully",
    error: ApiErrorHandler("Todo fetch failed!"),
  });

// create todo api
export const createTodo = (todo: string) =>
  toast.promise(api.post<ApiRes<Todo>>("/todo", {todo}), {
    loading: "Adding todo...",
    success: "Todo added successfully",
    error: ApiErrorHandler("Todo add failed!"),
  });

// toggle of todo api
export const toggleTodo = (id: string, completed: boolean) =>
  toast.promise(api.put<ApiRes<Todo>>(`/todo/${id}`, {completed}), {
    loading: "Updating todo...",
    success: "Todo updated successfully",
    error: ApiErrorHandler("Todo update failed!"),
  });

// delete todo api
export const deleteTodo = (id: string) =>
  toast.promise(api.delete<ApiRes<Todo>>(`/todo/${id}`), {
    loading: "Deleting todo...",
    success: "Todo deleted successfully",
    error: ApiErrorHandler("Todo delete failed!"),
  });
