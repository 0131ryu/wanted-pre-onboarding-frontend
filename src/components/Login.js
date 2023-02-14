import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { loginStyle } from "./styles/auth/login";
import { authStyle } from "./styles/auth";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const EMAIL_REGEX = /@/;
const PASSWORD_REGEX = /().{8,}/;
const LOGIN_URL = "/auth/signin";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMessage("");
  }, [email, password]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email: email,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.access_token;
      const roles = response?.data?.roles;
      localStorage.setItem("accessToken", accessToken);
      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      navigate("/todo");
    } catch (err) {
      if (!err?.response) {
        setErrMessage("서버 연결 실패");
      } else if (err.response?.status === 404) {
        setErrMessage("잘못된 이메일을 입력하거나, 없는 이메일입니다.");
      } else if (err.response?.status === 401) {
        setErrMessage("비밀번호를 다시 확인하세요.");
      } else {
        setErrMessage("로그인 실패");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <loginStyle.Section>
        {errMessage ? (
          <authStyle.errmsg ref={errRef} aria-live="assertive">
            {errMessage}
          </authStyle.errmsg>
        ) : (
          <authStyle.offscreen ref={errRef} aria-live="assertive">
            {errMessage}
          </authStyle.offscreen>
        )}

        <authStyle.H1>로그인</authStyle.H1>
        <authStyle.Form onSubmit={handlerSubmit}>
          <authStyle.Label htmlFor="email">이메일</authStyle.Label>
          <loginStyle.Input
            type="text"
            id="email"
            data-testid="email-input"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          {email && !validEmail ? (
            <authStyle.instructions id="emailNote">
              <FontAwesomeIcon icon={faInfoCircle} />
              이메일 형식을 정확히 지켜주세요
              <br />
              (ex) test@naver.com
            </authStyle.instructions>
          ) : null}
          <authStyle.Label htmlFor="password">비밀번호</authStyle.Label>
          <loginStyle.Input
            type="password"
            id="password"
            data-testid="password-input"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {password && !validPassword ? (
            <authStyle.instructions id="emailNote">
              <FontAwesomeIcon icon={faInfoCircle} />
              8자리 이상 비밀번호를 입력하세요
            </authStyle.instructions>
          ) : null}
          <authStyle.Button
            data-testid="signin-button"
            disabled={!validEmail || !validPassword}
          >
            로그인
          </authStyle.Button>
        </authStyle.Form>
        <loginStyle.pTag>
          계정이 없습니까?
          <br />
          <span className="line">
            <loginStyle.aTag href="/signup">회원가입</loginStyle.aTag>
          </span>
        </loginStyle.pTag>
      </loginStyle.Section>
    </>
  );
};

export default Login;
