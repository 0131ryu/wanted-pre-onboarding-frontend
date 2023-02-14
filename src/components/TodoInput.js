import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { todoStyle } from "./styles/todo";

const ADD_TODO = "/todos";

const TodoInput = () => {
  const errRef = useRef();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setErrMessage("");
  }, [newTodo]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADD_TODO,
        JSON.stringify({
          id: 1,
          todo: newTodo,
          isCompleted: false,
          userId: 1,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setNewTodo("");
      alert("등록되었습니다.");
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMessage("todo에 입력 후 추가해주세요.");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <todoStyle.Form onSubmit={handlerSubmit}>
          <div>
            {errMessage ? (
              <todoStyle.errmsg ref={errRef} aria-live="assertive">
                {errMessage}
              </todoStyle.errmsg>
            ) : (
              <todoStyle.offscreen ref={errRef} aria-live="assertive">
                {errMessage}
              </todoStyle.offscreen>
            )}
            <todoStyle.Input
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
              data-testid="new-todo-input"
              type="text"
              id="outlined-textarea"
              label="Add to-do"
              placeholder="할 일을 입력해주세요."
            />
            <todoStyle.Button
              data-testid="new-todo-add-button"
              type="submit"
              variant="contained"
            >
              추가
            </todoStyle.Button>
          </div>
        </todoStyle.Form>
      </div>
    </>
  );
};

export default TodoInput;
