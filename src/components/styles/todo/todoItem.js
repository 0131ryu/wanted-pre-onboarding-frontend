import styled from "styled-components";

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--light-blue);
  font-size: 0.8rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin-left: 1rem;
`;

const EditButton = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--dark-orange);
  font-size: 0.8rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin-left: 1rem;
`;

const CancleButton = styled.button`
  font-family: "Nunito", sans-serif;
  background: var(--light-blue);
  font-size: 0.8rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin-left: 1rem;
`;

const InputCheckbox = styled.input`
  background: var(--dark-orange);
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 1.5rem;
`;

const InputEdit = styled.input`
  background: white;
  width: 15rem;
  height: 3rem;
  border-radius: 0.5rem;
  border-width: 0;
  font-size: 1rem;
`;

export const todoItemStyle = {
  Button,
  EditButton,
  CancleButton,
  InputCheckbox,
  InputEdit,
};
