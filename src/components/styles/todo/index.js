import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Section = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: var(--dark-blue);
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
`;

const Li = styled.li`
  display: flex;
  list-style: none;
  background: var(--light-orange);
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  margin-top: 1rem;
`;

const Label = styled.label`
  display: flex;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  width: 22rem;
`;

const Span = styled.span`
  margin-top: 1.2rem;
  margin-left: 0.5rem;
`;

const IconPtag = styled.p`
  display: flex;
  margin-top: 1.4rem;
  width: 14rem;
`;

const IconButton = styled.p`
  cursor: pointer;
  margin-right: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

const Input = styled.input`
  font-family: "Nunito", sans-serif;
  width: 78%;
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 2;
  border-color: var(--light-blue);
`;

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--dark-orange);
  font-size: 24px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: bold;
  color: white;
`;

const LogoutButton = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--light-blue);
  font-size: 15px;
  width: 5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  font-weight: bold;
  color: white;
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

export const todoStyle = {
  H1,
  Section,
  Form,
  Input,
  Li,
  Label,
  Span,
  IconPtag,
  IconButton,
  Button,
  LogoutButton,
  errmsg,
  offscreen,
  instructions,
};
