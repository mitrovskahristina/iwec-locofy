import styled from "styled-components";

const DModelingFor = styled.b`
  position: relative;
`;
const Download = styled.b`
  position: relative;
  color: var(--color-firebrick);
`;
const LearningmaterialcardRoot = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--primary-contrast);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-16xl);
  gap: var(--gap-56xl);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
    align-items: center;
    justify-content: flex-start;
  }
  gap: ${(p) => p.learningMaterialCardGap};
`;

const LearningMaterialCard = ({
  dModelingForBeginnersDana,
  learningMaterialCardGap,
}) => {
  return (
    <LearningmaterialcardRoot learningMaterialCardGap={learningMaterialCardGap}>
      <DModelingFor>{dModelingForBeginnersDana}</DModelingFor>
      <Download>Download</Download>
    </LearningmaterialcardRoot>
  );
};

export default LearningMaterialCard;
