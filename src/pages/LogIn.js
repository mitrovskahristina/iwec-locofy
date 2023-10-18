import styled from "styled-components";
import FormContainer from "../components/FormContainer";

const BannerimageIcon = styled.img`
  align-self: stretch;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  height: 100vh;
  z-index: 0;
`;
const GroupIcon = styled.img`
  position: relative;
  width: 8.42rem;
  height: 2.22rem;
`;
const IwecLogoInverse1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.06rem;
`;
const LearnNewSkills = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 1200px) {
    font-size: var(--typography-caption-size);
    flex: 1;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const LearnNewSkillsBroadenYourWrapper = styled.p`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Iwtextcontainer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 2.5rem;
  left: 2.63rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 39.38rem;
  z-index: 1;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    display: flex;
  }
`;
const Imagecontainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: var(--gap-3xs);
  height: 100vh;
  @media screen and (max-width: 960px) {
    height: 30vh;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    height: 15vh;
  }
`;
const LoginRoot = styled.div`
  position: relative;
  background-color: var(--primary-contrast);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  font-size: var(--datepicker-currentmonth-size);
  color: var(--primary-contrast);
  font-family: var(--font-open-sans);
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const LogInLaptopScreenSize = () => {
  return (
    <LoginRoot>
      <Imagecontainer>
        <BannerimageIcon alt="" src="/bannerimage@2x.png" />
        <Iwtextcontainer>
          <IwecLogoInverse1>
            <GroupIcon alt="" src="/group.svg" />
          </IwecLogoInverse1>
          <LearnNewSkillsBroadenYourWrapper word-break="break-all">
            <LearnNewSkills>{` Learn new skills, broaden your horizons, and achieve your goals with our comprehensive curriculum and expert instructors. `}</LearnNewSkills>
          </LearnNewSkillsBroadenYourWrapper>
        </Iwtextcontainer>
      </Imagecontainer>
      <FormContainer />
    </LoginRoot>
  );
};

export default LogInLaptopScreenSize;
