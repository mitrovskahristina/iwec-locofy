import styled from "styled-components";

const HelloJaneSmith = styled.div`
  position: relative;
`;
const HelloJaneSmith1 = styled.b`
  position: relative;
`;
const LearnNewSkills = styled.div`
  position: relative;
  font-size: var(--typography-caption-size);
  font-family: var(--font-open-sans);
  color: var(--color-silver);
  display: inline-block;
  width: 35.38rem;
`;
const Welcomemessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: var(--font-size-xl);
  color: var(--primary-contrast);
`;
const HelloJaneSmithParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;
const WelcomebannerRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-xl);
  background: linear-gradient(93.75deg, #c8262d, #671418);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-21xl);
  text-align: left;
  font-size: var(--typography-body2-size);
  color: var(--color-silver);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    flex-direction: row;
    gap: var(--gap-31xl);
  }
  @media screen and (max-width: 420px) {
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
  }
`;

const WelcomeBanner = () => {
  return (
    <WelcomebannerRoot>
      <HelloJaneSmithParent>
        <HelloJaneSmith>Hello, Jane Smith!</HelloJaneSmith>
        <Welcomemessage>
          <HelloJaneSmith1>Welcome to IWEducationCenter</HelloJaneSmith1>
          <LearnNewSkills>{`Learn new skills, broaden your horizons, and achieve your goals with our comprehensive curriculum and expert instructors. `}</LearnNewSkills>
        </Welcomemessage>
      </HelloJaneSmithParent>
    </WelcomebannerRoot>
  );
};

export default WelcomeBanner;
