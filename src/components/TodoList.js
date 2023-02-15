import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <section>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={i}
            todo={todo}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
