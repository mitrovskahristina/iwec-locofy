import styled from "styled-components";
import LearningMaterialCards from "./LearningMaterialCards";

const LearningMaterial1 = styled.b`
  position: relative;
`;
const LearningmaterialRoot = styled.div`
  flex: 1;
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
    flex: 1;
  }
`;

const LearningMaterial = () => {
  return (
    <LearningmaterialRoot>
      <LearningMaterial1>Learning Material</LearningMaterial1>
      <LearningMaterialCards />
    </LearningmaterialRoot>
  );
};

export default LearningMaterial;
