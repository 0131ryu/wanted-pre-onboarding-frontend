import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState } from "react";
import { todoStyle } from "./styles/todo";
import { todoItemStyle } from "./styles/todo/todoItem";
import { modifyTodo, deleteTodo } from "../utils/todoAPI";

const TodoItem = ({ todo, setIsEdit, setIsDelete, isCompleted }) => {
  const [isModify, setIsModify] = useState(false);
  const [editText, setEditText] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const isComponentMounted = useRef(false);

  const clickCheckbox = () => {
    setIsChecked((prev) => !prev);
    setIsEdit((prev) => !prev);
  };

  const editCheckbox = useCallback(async () => {
    await modifyTodo({
      id: todo.id,
      todo: todo.todo,
      isCompleted: isChecked,
    });
  }, [isChecked, todo.id, todo.todo]);

  useEffect(() => {
    if (isComponentMounted.current) {
      editCheckbox();
    }
  }, [editCheckbox, isChecked]);

  useEffect(() => {
    isComponentMounted.current = true;
  }, []);

  useEffect(() => {
    setIsChecked(isCompleted);
  }, [isCompleted]);

  const modifyInputText = useCallback((e) => {
    e.preventDefault();
    setEditText(e.target.value);
  }, []);

  const modifySubmit = useCallback(
    async (todoId, editText, isCompleted) => {
      setIsModify(false);
      await modifyTodo({
        id: todoId,
        todo: editText,
        isCompleted: isCompleted,
      });
      setIsEdit((prev) => !prev);
    },
    [setIsEdit]
  );

  const deleteTodoText = useCallback(
    async (todoId) => {
      await deleteTodo({ id: todoId });
      setIsDelete((prev) => !prev);
    },
    [setIsDelete]
  );

  return (
    <>
      <todoStyle.Li>
        <input type="checkbox" checked={isChecked} onChange={clickCheckbox} />
        {isModify ? (
          <>
            <label style={{ display: "flex" }}>
              <form onSubmit={() => modifySubmit(todo.id, editText, isChecked)}>
                {/* 내용 수정 */}
                <todoItemStyle.InputEdit
                  type="text"
                  value={editText}
                  onChange={modifyInputText}
                  data-testid="modify-input"
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
                type="button"
                data-testid="delete-button"
                onClick={() => deleteTodoText(todo.id)}
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
