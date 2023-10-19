import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavActive from "./NavActive";
import Nav from "./Nav";
import PersonContainer from "./PersonContainer";

const IwecLogoInverse1Icon = styled.img`
  position: relative;
  width: 7.13rem;
  height: 1.94rem;
  overflow: hidden;
  flex-shrink: 0;
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    width: 4.38rem;
    padding-top: var(--padding-31xl);
    box-sizing: border-box;
  }
`;
const Navbar1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;
const Navbarlogo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-58xl);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
    gap: var(--gap-21xl);
    align-items: center;
    justify-content: center;
  }
`;
const NavigationbarRoot = styled.div`
  height: 47.19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-61xl);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--primary-contrast);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    flex: 1;
    gap: var(--gap-261xl);
    align-items: center;
    justify-content: flex-start;
  }
`;

const FormContainer1 = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <NavigationbarRoot>
      <Navbarlogo>
        <Logo>
          <IwecLogoInverse1Icon alt="" src="/iweclogoinverse-1.svg" />
        </Logo>
        <Navbar1>
          <NavActive />
          <Nav
            frameAAlignSelf="unset"
            frameAPadding="var(--padding-3xs) var(--padding-37xl) var(--padding-3xs) var(--padding-xl)"
            groups3="/cast-for-education.svg"
            studentsAndTeachers="Courses and Groups"
            frameACursor="unset"
          />
          <Nav
            groups3="/groups-3.svg"
            studentsAndTeachers="Students and Teachers"
          />
          <Nav
            frameAAlignSelf="unset"
            frameAPadding="var(--padding-3xs) var(--padding-55xl) var(--padding-3xs) var(--padding-xl)"
            groups3="/calendar-month.svg"
            studentsAndTeachers="Classes schedule"
            frameACursor="unset"
          />
          <Nav
            frameAAlignSelf="unset"
            frameAPadding="var(--padding-3xs) var(--padding-95xl) var(--padding-3xs) var(--padding-xl)"
            groups3="/playlist-add-check.svg"
            studentsAndTeachers="Presence"
            frameACursor="unset"
          />
        </Navbar1>
      </Navbarlogo>
      <Nav
        frameAAlignSelf="unset"
        frameAPadding="var(--padding-3xs) var(--padding-95xl) var(--padding-3xs) var(--padding-xl)"
        groups3="/reply.svg"
        studentsAndTeachers="Log Out"
        onFrameLinkClick={onFrameLinkClick}
        frameACursor="pointer"
      />
      <PersonContainer />
    </NavigationbarRoot>
  );
};

export default FormContainer1;
