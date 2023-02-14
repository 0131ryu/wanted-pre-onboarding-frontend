import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../pages/Todo";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Todo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
