import styled from "styled-components";

const HomeIcon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.13rem;
`;
const Home = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const HomeIconParentRoot = styled.a`
  text-decoration: none;
  border-radius: var(--br-3xs);
  background-color: var(--color-darkslategray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-111xl) var(--padding-3xs)
    var(--padding-xl);
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--primary-contrast);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
`;

const NavActive = () => {
  return (
    <HomeIconParentRoot>
      <HomeIcon alt="" src="/homeicon.svg" />
      <Home>Home</Home>
    </HomeIconParentRoot>
  );
};

export default NavActive;
