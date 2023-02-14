import { Navigate } from "react-router-dom";
import Register from "../components/Register";

const SignUp = () => {
  const isToken = localStorage.getItem("accessToken");
  return <>{isToken ? <Navigate to="/todo" /> : <Register />}</>;
};

export default SignUp;
