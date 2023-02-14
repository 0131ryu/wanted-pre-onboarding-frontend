"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const SignIn_1 = __importDefault(require("../pages/SignIn"));
const SignUp_1 = __importDefault(require("../pages/SignUp"));
const Router = () => {
    return (<react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<react_router_dom_1.Navigate to="/todo"/>}/>
          <react_router_dom_1.Route path="/todo"/>
          <react_router_dom_1.Route path="/signin" element={<SignIn_1.default />}/>
          <react_router_dom_1.Route path="/signup" element={<SignUp_1.default />}/>
          <react_router_dom_1.Route path="/*" element={<react_router_dom_1.Navigate to="/todo"/>}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>);
};
exports.default = Router;
