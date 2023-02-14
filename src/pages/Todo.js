import { Navigate } from "react-router-dom";
import MainTodo from "../components/MainTodo";

const Todo = () => {
  const isToken = localStorage.getItem("access_token");
  return (
    <>
      {isToken ? (
        <>
          <MainTodo />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

export default Todo;
