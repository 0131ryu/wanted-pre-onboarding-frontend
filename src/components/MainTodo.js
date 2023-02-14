import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todoStyle } from "./styles/todo";
import { todolistStyle } from "./styles/todo/todolist";

const MainTodo = () => {
  const logOut = useCallback(() => {
    localStorage.clear();
    window.location.replace("/");
  }, []);

  const [todo, setTodo] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    setAccessToken(access_token);
    const getTodos = async () => {
      await axios({
        method: "get",
        url: "/todos",
        headers: { Authorization: `Bearer ${access_token}` },
      })
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    };
    getTodos();
  }, [todo]);

  return (
    <todoStyle.Section>
      <todoStyle.LogoutButton className="logout" onClick={logOut}>
        logout
      </todoStyle.LogoutButton>
      <todoStyle.H1>TODO page</todoStyle.H1>

      <TodoInput />
      <todolistStyle.DivScroll>
        <TodoList todo={todo} />
      </todolistStyle.DivScroll>
    </todoStyle.Section>
  );
};

export default MainTodo;
