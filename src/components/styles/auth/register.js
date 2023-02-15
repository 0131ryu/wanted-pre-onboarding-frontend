import styled from "styled-components";

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
  top: 15%;
  transform: translateX(-50%);
`;

const Input = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 0.25rem;
  width: 98%;
  border-radius: 0.5rem;
  border-width: 0;
`;

const pTag = styled.p`
  color: white;
  font-size: 15px;
  text-align: left;
  width: 150px;
  margin: 0 auto;
`;

const aTag = styled.a`
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-decoration-line: none;
  margin-left: 2.5rem;
  cursor: pointer;
`;

export const registerStyle = {
  Section,
  Input,
  pTag,
  aTag,
};
