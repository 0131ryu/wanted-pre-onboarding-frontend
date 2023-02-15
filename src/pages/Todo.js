import { useCallback, useEffect, useMemo } from "react";
import { Navigate } from "react-router-dom";
import useGetTodo from "../hooks/useGetTodo";
import { todoStyle } from "../components/styles/todo";
import { todolistStyle } from "../components/styles/todo/todolist";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, getTodos] = useGetTodo();
  const isToken = localStorage.getItem("access_token");

  const logOut = useCallback(() => {
    localStorage.clear();
    window.location.replace("/");
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      {isToken ? (
        <todoStyle.Section>
          <todoStyle.LogoutButton className="logout" onClick={logOut}>
            logout
          </todoStyle.LogoutButton>
          <todoStyle.H1>TODO page</todoStyle.H1>

          <TodoInput />
          <todolistStyle.DivScroll>
            <TodoList todos={todos} />
          </todolistStyle.DivScroll>
        </todoStyle.Section>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};
export default Todo;
