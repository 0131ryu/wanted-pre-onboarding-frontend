import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { todoStyle } from "./styles/todo";
import * as todoAPI from "../utils/todoAPI";
import useGetTodo from "../hooks/useGetTodo";

const TodoInput = () => {
  const [todos, getTodos] = useGetTodo();
  const errRef = useRef();
  const [newTodo, setNewTodo] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setErrMessage("");
  }, [newTodo]);

  const handlerSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (newTodo.length <= 0) {
        setErrMessage("todo에 입력 후 추가해주세요.");
      } else {
        errRef.current.focus();
      await todoAPI.createTodo({ todo: newTodo });
      setNewTodo("");
      window.location.reload();
      getTodos();
      }
      
    },
    [newTodo]
  );
 

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
