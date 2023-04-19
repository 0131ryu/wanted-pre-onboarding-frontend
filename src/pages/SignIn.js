import { Navigate } from "react-router-dom";
import Login from "../components/Login";

const SignIn = () => {
  const isToken = localStorage.getItem("access_token");
  return <>{isToken ? <Navigate to="/todo" /> : <Login />}</>;
};

export default SignIn;
