import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { todoStyle } from "./styles/todo";

const TodoItem = ({ todo }) => {
  return (
    <>
      {todo.map((t, i) => (
        <todoStyle.Li key={i}>
          <todoStyle.Label>
            <input type="checkbox" />
            <todoStyle.Span>{t.todo}</todoStyle.Span>

            <todoStyle.IconPtag>
              <FontAwesomeIcon
                icon={faPenNib}
                style={{
                  color: "var(--light-blue)",
                  marginLeft: "0.25rem",
                }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "var(--dark-orange)", marginLeft: "0.25rem" }}
              />
            </todoStyle.IconPtag>
          </todoStyle.Label>
        </todoStyle.Li>
      ))}
    </>
  );
};

export default TodoItem;
