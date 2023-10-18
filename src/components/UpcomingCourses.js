import styled from "styled-components";
import CourseCard from "./CourseCard";

const UpcomingCourses1 = styled.b`
  position: relative;
`;
const ViewAll = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--typography-body2-size);
  font-weight: 700;
  color: var(--color-cornflowerblue-100);
  text-align: center;
`;
const UpcomingCoursesParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-596xl);
  }
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: unset;
    gap: var(--gap-431xl);
  }
`;
const Upcomingcoursescardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--typography-body2-size);
  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
`;
const UpcomingcoursesRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
`;

const UpcomingCourses = () => {
  return (
    <UpcomingcoursesRoot>
      <UpcomingCoursesParent>
        <UpcomingCourses1>Upcoming Courses</UpcomingCourses1>
        <ViewAll>View All</ViewAll>
      </UpcomingCoursesParent>
      <Upcomingcoursescardcontainer>
        <CourseCard iTEssentials="IT Essentials" prop="18.09.2023" />
        <CourseCard
          frameDivGap="70px"
          iTEssentials="Data Warehousing and Business Intelligence"
          prop="25.10.2023"
        />
      </Upcomingcoursescardcontainer>
    </UpcomingcoursesRoot>
  );
};

export default UpcomingCourses;
