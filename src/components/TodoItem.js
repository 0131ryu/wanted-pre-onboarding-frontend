import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { todoStyle } from "./styles/todo";
import { todoItemStyle } from "./styles/todo/todoItem";

const TodoItem = ({ todo, deleteTodo, modifyTodo }) => {
  const [isModify, setIsModify] = useState(false);
  const [editText, setEditText] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const editCheckbox = useCallback(() => {
    setIsChecked((prev) => !prev);
    modifyTodo(todo.id, todo.todo, !isChecked);
  }, [modifyTodo, todo.id, todo.todo, isChecked]);

  const clickModify = useCallback(() => {
    setIsModify((prev) => !prev);
  }, []);

  const modifyInputText = useCallback((e) => {
    e.preventDefault();
    setEditText(e.target.value);
  }, []);

  const modifySubmit = async (e) => {
    e.preventDefault();
    console.log("editText", editText, "todo.id", todo.id);
    await modifyTodo(todo.id, editText, todo.isCompleted);
    setIsModify(false);
  };

  return (
    <>
      <todoStyle.Li>
        {isModify ? (
          <>
            <todoStyle.Label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={editCheckbox}
              />
              <form onSubmit={modifySubmit}>
                {/* 내용 수정 */}
                <input
                  type="text"
                  value={editText}
                  onChange={modifyInputText}
                />
                <button
                  className="todoapp__item-edit-btn"
                  type="submit"
                  data-testid="submit-button"
                  variant="contained"
                >
                  제출
                </button>
                <button
                  type="button"
                  data-testid="cancel-button"
                  onClick={() => setIsModify(false)}
                >
                  취소
                </button>
              </form>
            </todoStyle.Label>
          </>
        ) : (
          <>
            <todoStyle.Label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={editCheckbox}
              />
              <todoStyle.Span>{todo.todo}</todoStyle.Span>

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
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
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
            </todoStyle.Label>
          </>
        )}
      </todoStyle.Li>
    </>
  );
};

export default TodoItem;
