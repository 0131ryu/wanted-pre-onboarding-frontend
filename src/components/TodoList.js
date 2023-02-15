import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, modifyTodo }) => {
  return (
    <section>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={i}
            todo={todo}
            deleteTodo={deleteTodo}
            modifyTodo={modifyTodo}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
