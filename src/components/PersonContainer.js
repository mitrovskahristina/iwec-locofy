import styled from "styled-components";

const PersoninfoChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 2.38rem;
  height: 2.38rem;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    width: 1.88rem;
    height: 1.88rem;
  }
`;
const JaneSmith = styled.div`
  position: relative;
  font-weight: 600;
`;
const Student = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  font-weight: 600;
  color: var(--color-darkgray);
`;
const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Personinfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const MoreVertIcon = styled.img`
  position: absolute;
  height: 66.67%;
  width: 16.67%;
  top: 16.67%;
  right: 41.67%;
  bottom: 16.67%;
  left: 41.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MoreVert = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const PersoncontainerRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-darkslategray-200);
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-27xl);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--primary-contrast);
  font-family: var(--font-lato);
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-8xs);
    box-sizing: border-box;
  }
`;

const PersonContainer = () => {
  return (
    <PersoncontainerRoot>
      <Personinfo>
        <PersoninfoChild alt="" src="/ellipse-2@2x.png" />
        <Person>
          <JaneSmith>Jane Smith</JaneSmith>
          <Student>Student</Student>
        </Person>
      </Personinfo>
      <MoreVert>
        <MoreVertIcon alt="" src="/more-vert.svg" />
      </MoreVert>
    </PersoncontainerRoot>
  );
};

export default PersonContainer;
