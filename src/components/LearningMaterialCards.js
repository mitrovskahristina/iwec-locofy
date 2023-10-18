import LearningMaterialCard from "./LearningMaterialCard";
import styled from "styled-components";

const LearningmaterialcardscontainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
`;

const LearningMaterialCards = () => {
  return (
    <LearningmaterialcardscontainerRoot>
      <LearningMaterialCard dModelingForBeginnersDana="3D Modeling For Beginners - Danan Thilakanathan" />
      <LearningMaterialCard
        dModelingForBeginnersDana="What is 3D Modeling - Norman I. Badler"
        learningMaterialCardGap="130px"
      />
    </LearningmaterialcardscontainerRoot>
  );
};

export default LearningMaterialCards;
