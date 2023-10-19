import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "./FormContainer1";
import styled from "styled-components";

const NavbarcontainerRoot = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-300);
  width: 15.63rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-mid);
  box-sizing: border-box;
  height: 100vh;
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--primary-contrast);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    width: 11%;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <NavbarcontainerRoot>
      <FormContainer1 />
    </NavbarcontainerRoot>
  );
};

export default Navbar;
