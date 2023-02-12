
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"



const Router = () => {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route
            path="/todo"
          
          />
          <Route path="/signin"  element={<SignIn />}/>
          <Route path="/signup"  element={<SignUp />}/>
          <Route path="/*" element={<Navigate to="/todo" />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Router