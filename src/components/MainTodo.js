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

  const [todos, setTodos] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [contents, setContents] = useState("");

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response);
      alert("삭제되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const modifyTodo = async (id, todo, isCompleted) => {
    try {
      const response = await axios.put(
        `/todos/${id}`,
        JSON.stringify({
          todo: todo,
          isCompleted: isCompleted,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      // alert("수정 완료");
    } catch (err) {
      console.log(err);
    }
  };

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
          setTodos(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    };
    getTodos();
  }, []);

  return (
    <todoStyle.Section>
      <todoStyle.LogoutButton className="logout" onClick={logOut}>
        logout
      </todoStyle.LogoutButton>
      <todoStyle.H1>TODO page</todoStyle.H1>

      <TodoInput />
      <todolistStyle.DivScroll>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      </todolistStyle.DivScroll>
    </todoStyle.Section>
  );
};

export default MainTodo;
