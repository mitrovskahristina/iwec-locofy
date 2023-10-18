import styled from "styled-components";

const Apply = styled.b`
  position: relative;
  font-size: var(--typography-caption-size);
  font-family: var(--font-lato);
  color: var(--primary-contrast);
  text-align: left;
`;
const SecondarybuttonRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-xs) var(--padding-11xl);
  background-color: var(--color-cornflowerblue-100);
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = ({ apply }) => {
  return (
    <SecondarybuttonRoot>
      <Apply>{apply}</Apply>
    </SecondarybuttonRoot>
  );
};

export default PrimaryButton;
