import TodoItem from "./TodoItem";

const TodoList = ({ todos, setIsEdit, setIsDelete }) => {
  console.log("todos", todos);
  return (
    <section>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setIsEdit={setIsEdit}
          setIsDelete={setIsDelete}
          isCompleted={todo.isCompleted}
        />
      ))}
    </section>
  );
};

export default TodoList;
