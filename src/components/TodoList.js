import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = ({todo}) => {
 
  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoList;
