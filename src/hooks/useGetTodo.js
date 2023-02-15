import * as todoAPI from "../utils/todoAPI";
import { useCallback, useState } from "react";

const useGetTodo = (initialState = []) => {
  const [todos, setTodos] = useState(initialState);

  const getTodos = useCallback(async () => {
    const response = await todoAPI.getTodos();
    setTodos(response);
  }, []);
  return [todos, getTodos];
};

export default useGetTodo;
