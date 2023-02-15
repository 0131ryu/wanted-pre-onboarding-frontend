import axios from "axios";

const getTodos = async () => {
  try {
    const response = await axios.get("/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const createTodo = async ({ todo }) => {
  try {
    const response = await axios.post(
      "/todos",
      JSON.stringify({
        todo: todo,
      }),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const modifyTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await axios.put(
      `/todos/${id}`,
      JSON.stringify({
        todo: todo,
        isCompleted: isCompleted,
      }),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async ({ id }) => {
  try {
    const response = await axios.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, createTodo, modifyTodo, deleteTodo };
