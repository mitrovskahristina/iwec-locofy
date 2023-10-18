import styled from "styled-components";

const PlaylistAddCheckIcon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.13rem;
`;
const Presence = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const PlaylistAddCheckParentRoot = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-95xl) var(--padding-3xs)
    var(--padding-xl);
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--color-darkgray);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  cursor: ${(p) => p.frameACursor};
`;

const Nav = ({ icon, navname, onFrameLinkClick, frameACursor }) => {
  return (
    <PlaylistAddCheckParentRoot
      onClick={onFrameLinkClick}
      frameACursor={frameACursor}
    >
      <PlaylistAddCheckIcon alt="" src={icon} />
      <Presence>{navname}</Presence>
    </PlaylistAddCheckParentRoot>
  );
};

export default Nav;
