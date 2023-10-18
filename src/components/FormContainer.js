import { useCallback } from "react";
import styled from "styled-components";
import LogInForm from "./LogInForm";
import { useNavigate } from "react-router-dom";

const ReadyToDive = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 420px) {
    font-size: var(--datepicker-currentmonth-size);
    align-self: stretch;
    width: auto;
  }
`;
const ToLogIn = styled.div`
  position: relative;
  font-size: var(--datepicker-currentmonth-size);
  color: var(--color-gray-100);
  @media screen and (max-width: 420px) {
    font-size: var(--typography-caption-size);
    align-self: stretch;
    width: auto;
  }
`;
const Title = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
  @media screen and (max-width: 420px) {
    padding-top: 0rem;
    box-sizing: border-box;
  }
`;
const LogIn = styled.b`
  position: relative;
  font-size: var(--typography-body2-size);
  font-family: var(--font-lato);
  color: var(--primary-contrast);
  text-align: left;
`;
const Buttonred = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) 0rem;
  background-color: var(--color-firebrick);
  align-self: stretch;
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Primarybutton1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 420px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const SeparatorChild = styled.div`
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  height: 0.06rem;
  @media screen and (max-width: 420px) {
    flex: 1;
  }
`;
const Or = styled.div`
  position: relative;
`;
const SeparatorItem = styled.div`
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  height: 0.06rem;
`;
const Separator = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  @media screen and (max-width: 420px) {
    align-self: stretch;
    width: auto;
  }
`;
const Devicongoogle = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const ContinueWithGoogle = styled.div`
  position: relative;
  font-size: var(--typography-body2-size);
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-darkslategray-100);
  text-align: left;
`;
const Secondarybutton1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-lightgray);
  padding: var(--padding-mini) 0rem;
  background-color: transparent;
  border-radius: var(--br-31xl);
  box-sizing: border-box;
  width: 23rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
`;
const PrimarybuttonParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  font-size: var(--typography-body2-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-lato);
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-61xl);
  @media screen and (max-width: 420px) {
    padding-top: 0rem;
    box-sizing: border-box;
  }
`;
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
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <FormcontainerRoot>
      <Form>
        <Title>
          <ReadyToDive>Ready to Dive In? Log in below</ReadyToDive>
          <ToLogIn>To log in please enter your email and password.</ToLogIn>
        </Title>
        <LogInForm />
        <PrimarybuttonParent>
          <Primarybutton1 id="primary_button">
            <Buttonred>
              <LogIn>Log In</LogIn>
            </Buttonred>
          </Primarybutton1>
          <Separator>
            <SeparatorChild />
            <Or>or</Or>
            <SeparatorItem />
          </Separator>
          <Secondarybutton1 onClick={onSecondaryButtonClick}>
            <Devicongoogle alt="" src="/devicongoogle.svg" />
            <ContinueWithGoogle>Continue with Google</ContinueWithGoogle>
          </Secondarybutton1>
        </PrimarybuttonParent>
      </Form>
    </FormcontainerRoot>
  );
};

export default FormContainer;
