/* eslint-disable no-unused-expressions */
import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { todoStyle } from "./styles/todo";
import { todoItemStyle } from "./styles/todo/todoItem";
import * as todoAPI from "../utils/todoAPI";
import useGetTodo from "../hooks/useGetTodo";

const TodoItem = ({ todo, modifyTodo }) => {
  const [todos, getTodos] = useGetTodo();
  const [isModify, setIsModify] = useState(false);
  const [editText, setEditText] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const editCheckbox = useCallback(async () => {
    setIsModify(false);
    await todoAPI.modifyTodo({
      id: todo.id,
      todo: todo.todo,
      isCompleted: !isChecked,
    });
    window.location.reload();
  }, [isChecked, todo]);

  const modifyInputText = useCallback((e) => {
    e.preventDefault();
    setEditText(e.target.value);
  }, []);

  const modifySubmit = useCallback(
    async (todoId, editText, isCompleted) => {
      setIsModify(false);
      await todoAPI.modifyTodo({
        id: todoId,
        todo: editText,
        isCompleted: isCompleted,
      });
      // getTodos();
      window.location.reload();
    },
    [editText]
  );

  const deleteTodo = useCallback(
    async (todoId) => {
      await todoAPI.deleteTodo({ id: todoId });
      window.location.reload();
    },
    [getTodos]
  );

  return (
    <>
      <todoStyle.Li>
        {isModify ? (
          <>
            <label style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={editCheckbox}
              />
              <form
                onSubmit={() =>
                  modifySubmit(todo.id, editText, todo.isCompleted)
                }
              >
                {/* 내용 수정 */}
                <todoItemStyle.InputEdit
                  type="text"
                  value={editText}
                  onChange={modifyInputText}
                />

                <todoItemStyle.EditButton
                  className="todoapp__item-edit-btn"
                  type="submit"
                  data-testid="submit-button"
                  variant="contained"
                >
                  제출
                </todoItemStyle.EditButton>
                <todoItemStyle.CancleButton
                  type="button"
                  data-testid="cancel-button"
                  onClick={() => setIsModify(false)}
                >
                  취소
                </todoItemStyle.CancleButton>
              </form>
            </label>
          </>
        ) : (
          <>
            <todoStyle.Label>
              <todoItemStyle.InputCheckbox
                type="checkbox"
                checked={isChecked}
                onChange={editCheckbox}
              />
              <todoStyle.Span>{todo.todo}</todoStyle.Span>
            </todoStyle.Label>
            <todoStyle.IconPtag>
              <todoItemStyle.Button
                type="button"
                data-testid="modify-button"
                onClick={() => {
                  setIsModify((prev) => !prev);
                }}
              >
                <FontAwesomeIcon
                  icon={faPenNib}
                  style={{
                    color: "var(--light-orange)",
                    marginLeft: "0.25rem",
                  }}
                />
                수정
              </todoItemStyle.Button>
              <todoItemStyle.Button
                data-testid="delete-button"
                type="button"
                onClick={() => deleteTodo(todo.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    color: "var(--dark-orange)",
                    marginLeft: "0.25rem",
                  }}
                />
                삭제
              </todoItemStyle.Button>
            </todoStyle.IconPtag>
          </>
        )}
      </todoStyle.Li>
    </>
  );
};

export default TodoItem;
