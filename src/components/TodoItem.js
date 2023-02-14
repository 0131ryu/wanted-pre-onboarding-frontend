import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { todoStyle } from "./styles/todo";
import { todoItemStyle } from "./styles/todo/todoItem";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  return (
    <>
      {todo.map((t, i) => (
        <todoStyle.Li key={i}>
          <todoStyle.Label>
            <input
              type="checkbox"
              checked={t.isCompleted}
              onChange={(e) => {
                editTodo(t.id, t.todo, e.target.checked);
              }}
            />
            <todoStyle.Span>{t.todo}</todoStyle.Span>

            <todoStyle.IconPtag>
              <todoItemStyle.Button data-testid="modify-button">
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
                data-testid="modify-button"
                onClick={() => {
                  deleteTodo(t.id);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "var(--dark-orange)", marginLeft: "0.25rem" }}
                />
                삭제
              </todoItemStyle.Button>
            </todoStyle.IconPtag>
          </todoStyle.Label>
        </todoStyle.Li>
      ))}
    </>
  );
};

export default TodoItem;
