import { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todoStyle } from "./styles/todo";
import { todolistStyle } from "./styles/todo/todolist";
import useGetTodo from "../hooks/useGetTodo";

const MainTodo = () => {
  const [todos, getTodos] = useGetTodo();
  const logOut = useCallback(() => {
    localStorage.clear();
    window.location.replace("/");
  }, []);
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
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
  );
};

export default MainTodo;
