import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getTodos } from "../utils/todoAPI";
import { todoStyle } from "../components/styles/todo";
import { todolistStyle } from "../components/styles/todo/todolist";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const bringTodos = async () => {
    const response = await getTodos();
    setTodos(response);
  };

  useEffect(() => {
    bringTodos();
  }, [isAdd, isEdit, isDelete]);

  const isToken = localStorage.getItem("access_token");

  const logOut = useCallback(() => {
    localStorage.clear();
    window.location.replace("/");
  }, []);

  return (
    <>
      {isToken ? (
        <todoStyle.Section>
          <todoStyle.LogoutButton className="logout" onClick={logOut}>
            logout
          </todoStyle.LogoutButton>
          <todoStyle.H1>TODO page</todoStyle.H1>
          <TodoInput setIsAdd={setIsAdd} />
          <todolistStyle.DivScroll>
            <TodoList
              todos={todos}
              setIsEdit={setIsEdit}
              setIsDelete={setIsDelete}
            />
          </todolistStyle.DivScroll>
        </todoStyle.Section>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};
export default Todo;
