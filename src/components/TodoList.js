import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, editTodo, deleteTodo }) => {
  return (
    <section>
      <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
    </section>
  );
};

export default TodoList;
