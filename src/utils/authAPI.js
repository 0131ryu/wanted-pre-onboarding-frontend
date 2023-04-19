import { instance } from "./instance";
const REGISTER_URL = "/auth/signup";
const LOGIN_URL = "/auth/signin";

const signUp = async ({ email, password }) => {
  try {
    const response = await instance.post(
      REGISTER_URL,
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(`회원가입 오류: ${err}`);
    return err;
  }
};

const signIn = async ({ email, password }) => {
  try {
    const response = await instance.post(
      LOGIN_URL,
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(`로그인 에러 : ${err}`);
    return err;
  }
};

export { signUp, signIn };
