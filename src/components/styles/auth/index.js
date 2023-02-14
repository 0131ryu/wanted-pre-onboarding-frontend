import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--light-orange);
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: bold;
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
  font-size: 15px;
`;

const errmsg = styled.p`
  background-color: var(--light-orange);
  color: #567189;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const offscreen = styled.p`
  position: absolute;
  left: -9999px;
`;

const instructions = styled.p`
  font-size: 1rem;
  border-radius: 0.5rem;
  background: var(--light-blue);
  color: black;
  padding: 0.25rem;
  position: relative;
  bottom: -1px;
`;

export const authStyle = {
  H1,
  Form,
  Button,
  Label,
  errmsg,
  offscreen,
  instructions,
};
