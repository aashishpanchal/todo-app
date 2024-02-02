import {useMemo} from "react";
import {useTodo} from "@/hooks/useTodo";
import {useSearchParams} from "react-router-dom";

export default function TodoList() {
  const {todo, handleTodoCompleted, handleTodoDelete} = useTodo();
  const [searchParams] = useSearchParams();

  const filterTodo = useMemo(() => {
    const query = searchParams.get("todo");
    if (query === "active") return todo.filter((todo) => !todo.completed);
    else if (query === "completed")
      return todo.filter((todo) => todo.completed);
    return todo;
  }, [todo, searchParams.get("todo")]);

  return (
    <ul className="mt-5">
      {filterTodo.map((item, index) => (
        <li
          key={index}
          className="grid grid-cols-3 gap-4 items-center w-full py-2 border-b border-gray-200 hover:bg-pink-50"
        >
          <input
            type="checkbox"
            id={`todo-${item.id}`}
            checked={item.completed}
            onChange={(e) => handleTodoCompleted(item.id, e.target.checked)}
            className="peer"
          />
          <label
            htmlFor={`todo-${item.id}`}
            className="peer-checked:text-pink-700 peer-checked:line-through justify-center"
          >
            {item.todo}
          </label>
          {item.completed && (
            <button
              type="button"
              onClick={() => handleTodoDelete(item.id)}
              className="button-pink w-fit "
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
