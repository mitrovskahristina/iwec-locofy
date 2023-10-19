import LoginForm1 from "./LoginForm1";
import styled from "styled-components";

const FormcontainerRoot = styled.div`
  flex: 1;
  height: 50rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-300);
  font-family: var(--font-open-sans);
  @media screen and (max-width: 960px) {
    padding-top: var(--padding-11xl);
    padding-bottom: var(--padding-122xl);
    box-sizing: border-box;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    align-items: flex-start;
    justify-content: center;
    padding-top: var(--padding-31xl);
    padding-bottom: 0rem;
    box-sizing: border-box;
  }
`;

const FormContainer = () => {
  return (
    <FormcontainerRoot>
      <LoginForm1 />
    </FormcontainerRoot>
  );
};

export default FormContainer;
