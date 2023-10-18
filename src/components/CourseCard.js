import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const VuesaxbulkbookIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
`;
const ItEssentials = styled.b`
  position: relative;
`;
const Coursename = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    padding-left: 0rem;
    padding-right: 0rem;
    box-sizing: border-box;
  }
`;
const ItEssentials1 = styled.div`
  position: relative;
`;
const Date1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  color: var(--color-gray-200);
  @media screen and (max-width: 960px) {
    padding-left: 0rem;
    padding-right: 0rem;
    box-sizing: border-box;
  }
`;
const CoursenameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-249xl);
  @media screen and (max-width: 960px) {
    gap: var(--gap-31xl);
    padding-left: 0rem;
    padding-right: 0rem;
    box-sizing: border-box;
  }
  gap: ${(p) => p.frameDivGap};
`;
const Buttonscontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: unset;
    gap: var(--gap-xl);
    align-items: center;
    justify-content: center;
    padding-left: 0rem;
    padding-right: 0rem;
    box-sizing: border-box;
  }
`;
const CoursecardRoot = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--primary-contrast);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xl);
  gap: var(--gap-71xl);
  text-align: left;
  font-size: var(--typography-body2-size);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: stretch;
    height: auto;
    flex-direction: column;
    gap: var(--gap-31xl);
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const CourseCard = ({ frameDivGap, iTEssentials, prop }) => {
  return (
    <CoursecardRoot>
      <CoursenameParent frameDivGap={frameDivGap}>
        <Coursename>
          <VuesaxbulkbookIcon alt="" src="/vuesaxbulkbook.svg" />
          <ItEssentials>{iTEssentials}</ItEssentials>
        </Coursename>
        <Date1>
          <VuesaxbulkbookIcon alt="" src="/vuesaxbulkcalendartick.svg" />
          <ItEssentials1>{prop}</ItEssentials1>
        </Date1>
      </CoursenameParent>
      <Buttonscontainer>
        <SecondaryButton
          tertiaryButtonBorder="2px solid var(--color-cornflowerblue-100)"
          tertiaryButtonBackgroundColor="rgba(245, 245, 245, 0)"
          apply="View Course"
          applyColor="#207fce"
        />
        <PrimaryButton apply="Apply" />
      </Buttonscontainer>
    </CoursecardRoot>
  );
};

export default CourseCard;
