import styled from "styled-components";

const Groups3Icon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.13rem;
`;
const StudentsAndTeachers = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Groups3ParentRoot = styled.a`text-decoration: none;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-25xl) var(--padding-3xs) var(--padding-xl);
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
  align-self: ${(p) => p.frameAAlignSelf}
  padding: ${(p) => p.frameAPadding}
  cursor: ${(p) => p.frameACursor}
`;

const Nav = ({
  frameAAlignSelf,
  frameAPadding,
  groups3,
  studentsAndTeachers,
  onFrameLinkClick,
  frameACursor,
}) => {
  return (
    <Groups3ParentRoot
      frameAAlignSelf={frameAAlignSelf}
      frameAPadding={frameAPadding}
      onClick={onFrameLinkClick}
      frameACursor={frameACursor}
    >
      <Groups3Icon alt="" src={groups3} />
      <StudentsAndTeachers>{studentsAndTeachers}</StudentsAndTeachers>
    </Groups3ParentRoot>
  );
};

export default Nav;
