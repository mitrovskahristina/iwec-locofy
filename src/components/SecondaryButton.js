import styled from "styled-components";

const Apply = styled.b`
  position: relative;
  font-size: var(--typography-caption-size);
  font-family: var(--font-lato);
  color: var(--color-cornflowerblue-100);
  text-align: left;
  color: ${(p) => p.applyColor};
`;
const TertiarybuttonRoot = styled.button`cursor: pointer;
  border: 2px solid var(--color-cornflowerblue-100);
  padding: var(--padding-xs) var(--padding-11xl);
  background-color: var(--color-whitesmoke-100);
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
  box-sizing: border-box;
  
  }
  border: ${(p) => p.tertiaryButtonBorder}
  background-color: ${(p) => p.tertiaryButtonBackgroundColor}
`;

const SecondaryButton = ({
  tertiaryButtonBorder,
  tertiaryButtonBackgroundColor,
  apply,
  applyColor,
}) => {
  return (
    <TertiarybuttonRoot
      tertiaryButtonBorder={tertiaryButtonBorder}
      tertiaryButtonBackgroundColor={tertiaryButtonBackgroundColor}
    >
      <Apply applyColor={applyColor}>{apply}</Apply>
    </TertiarybuttonRoot>
  );
};

export default SecondaryButton;
