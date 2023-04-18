import { useRef, useState, useEffect, useCallback } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { registerStyle } from "./styles/auth/register";
import { authStyle } from "./styles/auth";

const EMAIL_REGEX = /@/;
const PASSWORD_REGEX = /().{8,}/;
const REGISTER_URL = "/auth/signup";

const Register = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMessage("");
  }, [email, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkEmail = EMAIL_REGEX.test(email);
    const checkPassword = PASSWORD_REGEX.test(password);

    if (!checkEmail || !checkPassword) {
      setErrMessage("오류가 있어 등록하지 못합니다.");
      return;
    }
    try {
      await axios.post(
        REGISTER_URL,
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
      navigate("/signin");
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMessage("Email이 이미 있습니다.");
      } else {
        setErrMessage("회원가입 실패");
      }
      errRef.current.focus();
    }
  };

  const onSignIn = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <>
      <registerStyle.Section>
        {errMessage ? (
          <authStyle.errmsg ref={errRef} aria-live="assertive">
            {errMessage}
          </authStyle.errmsg>
        ) : (
          <authStyle.offscreen ref={errRef} aria-live="assertive">
            {errMessage}
          </authStyle.offscreen>
        )}
        <authStyle.H1>회원가입</authStyle.H1>
        <authStyle.Form onSubmit={handleSubmit}>
          <authStyle.Label htmlFor="email">
            이메일
            {validEmail ? (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#FAD6A5", marginLeft: "0.25rem" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "red", marginLeft: "0.25rem" }}
              />
            )}
          </authStyle.Label>
          <div>
            <registerStyle.Input
              type="text"
              id="email"
              data-testid="email-input"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailNote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>
          {emailFocus && email && !validEmail ? (
            <authStyle.instructions id="emailNote">
              <FontAwesomeIcon icon={faInfoCircle} />
              이메일 형식을 정확히 지켜주세요
              <br />
              (ex) test@naver.com
            </authStyle.instructions>
          ) : null}

          <authStyle.Label htmlFor="password">
            비밀번호
            {validPassword ? (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#FAD6A5", marginLeft: "0.25rem" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "red", marginLeft: "0.25rem" }}
              />
            )}
          </authStyle.Label>
          <div>
            <registerStyle.Input
              type="password"
              id="password"
              data-testid="password-input"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordNote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>
          {passwordFocus && password && !validPassword ? (
            <authStyle.instructions id="emailNote">
              <FontAwesomeIcon icon={faInfoCircle} />
              8자리 이상 비밀번호를 입력하세요
            </authStyle.instructions>
          ) : null}

          <authStyle.Label htmlFor="confirm_password">
            비밀번호 확인
            {validMatch ? (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#FAD6A5", marginLeft: "0.25rem" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "red", marginLeft: "0.25rem" }}
              />
            )}
          </authStyle.Label>
          <div>
            <registerStyle.Input
              type="password"
              id="confirm_password"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmPassword"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
          {matchFocus && !validMatch ? (
            <authStyle.instructions id="emailNote">
              <FontAwesomeIcon icon={faInfoCircle} />
              비밀번호와 일치하지 않습니다.
            </authStyle.instructions>
          ) : null}

          <authStyle.Button
            data-testid="signup-button"
            disabled={
              !validEmail || !validPassword || !validMatch ? true : false
            }
          >
            회원가입
          </authStyle.Button>
        </authStyle.Form>
        <registerStyle.pTag>
          이미 계정이 있나요?
          <br />
          <span className="line">
            <registerStyle.aTag onClick={onSignIn}>로그인</registerStyle.aTag>
          </span>
        </registerStyle.pTag>
      </registerStyle.Section>
    </>
  );
};

export default Register;
