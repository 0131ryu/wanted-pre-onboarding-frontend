import { useRef, useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../context/AuthProvider";
import { loginStyle } from "./styles/auth/login";
import { authStyle } from "./styles/auth";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "../utils/authAPI";

const EMAIL_REGEX = /@/;
const PASSWORD_REGEX = /().{8,}/;

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
    const response = await signIn({ email, password });
    if (response?.status === 200) {
      const access_token = response?.data?.access_token;
      const roles = response?.data?.roles;
      localStorage.setItem("access_token", access_token);
      setAuth({ email, password, roles, access_token });
      setEmail("");
      setPassword("");
      navigate("/todo");
    } else {
      setErrMessage("로그인 실패");
      errRef.current.focus();
    }
  };

  const onSignUp = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

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
            <loginStyle.aTag onClick={onSignUp}>회원가입</loginStyle.aTag>
          </span>
        </loginStyle.pTag>
      </loginStyle.Section>
    </>
  );
};

export default Login;
