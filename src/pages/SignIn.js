import Login from "../components/Login";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const isToken = localStorage.getItem("accessToken");
  return <>{isToken ? <Navigate to="/todo" /> : <Login />}</>;
};

export default SignIn;
