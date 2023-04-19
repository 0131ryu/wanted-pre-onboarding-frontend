import { instance } from "./instance";
const TODO_URL = "/todos";

const getTodos = async () => {
  try {
    const response = await instance.get(TODO_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const createTodo = async ({ todo }) => {
  try {
    const response = await instance.post(
      TODO_URL,
      JSON.stringify({
        todo: todo,
      }),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const modifyTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await instance.put(
      `${TODO_URL}/${id}`,
      JSON.stringify({
        todo: todo,
        isCompleted: isCompleted,
      }),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async ({ id }) => {
  try {
    const response = await instance.delete(`${TODO_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, createTodo, modifyTodo, deleteTodo };
