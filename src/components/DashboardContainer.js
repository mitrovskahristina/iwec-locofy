import WelcomeBanner from "./WelcomeBanner";
import MyTasks from "./MyTasks";
import LearningMaterial from "./LearningMaterial";
import styled from "styled-components";
import UpcomingCourses from "./UpcomingCourses";
import Calendar from "./Calendar";
import EventCard from "./EventCard";

const Section2 = styled.div`
  width: 52.06rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
  }
`;
const Leftsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-xl);
  gap: var(--gap-30xl);
`;
const Events = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-xl);
  gap: var(--gap-mini);
  text-align: center;
  font-size: var(--datepicker-currentmonth-size);
  color: var(--color-darkslategray-400);
  font-family: var(--typography-body2);
  @media screen and (max-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: var(--padding-21xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    padding-top: var(--padding-21xl);
    box-sizing: border-box;
  }
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: scroll;
  }
`;
const DashboardcontaainerRoot = styled.div`
  flex: 1;
  height: 50.44rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-21xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
  @media screen and (max-width: 1200px) {
    flex: 1;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

const DashboardContainer = () => {
  return (
    <DashboardcontaainerRoot>
      <Dashboard>
        <Leftsection>
          <WelcomeBanner />
          <Section2>
            <MyTasks />
            <LearningMaterial />
          </Section2>
          <UpcomingCourses />
        </Leftsection>
        <Events>
          <Calendar />
          <EventCard />
        </Events>
      </Dashboard>
    </DashboardcontaainerRoot>
  );
};

export default DashboardContainer;
