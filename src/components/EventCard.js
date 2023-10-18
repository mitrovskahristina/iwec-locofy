import styled from "styled-components";

const Pm600 = styled.div`
  position: relative;
  font-weight: 600;
`;
const DGraphicsFrom = styled.b`
  position: relative;
  font-size: var(--typography-body2-size);
  color: var(--color-darkslategray-300);
`;
const Coursetime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const MembersChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 1.56rem;
  height: 1.56rem;
  object-fit: cover;
`;
const MembersItem = styled.img`
  position: relative;
  border-radius: 50%;
  width: 1.56rem;
  height: 1.56rem;
  object-fit: cover;
  margin-left: -0.62rem;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 50%;
  background-color: var(--color-aliceblue);
  width: 1.56rem;
  height: 1.56rem;
`;
const B = styled.b`
  position: absolute;
  top: 0.5rem;
  left: 0.38rem;
`;
const EllipseParent = styled.div`
  position: relative;
  width: 1.56rem;
  height: 1.56rem;
  margin-left: -0.62rem;
`;
const Members = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-5xs);
  color: var(--color-darkslategray-300);
`;
const EventcardRoot = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--primary-contrast);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-94xl) var(--padding-mini)
    var(--padding-6xl);
  gap: var(--gap-mini);
  text-align: left;
  font-size: var(--typography-caption-size);
  color: var(--color-gray-100);
  font-family: var(--font-lato);
`;

const EventCard = () => {
  return (
    <EventcardRoot>
      <Coursetime>
        <Pm600>{`4:00 PM - 6:00 PM `}</Pm600>
        <DGraphicsFrom>3D Graphics from Ground Up</DGraphicsFrom>
      </Coursetime>
      <Members>
        <MembersChild alt="" src="/ellipse-6@2x.png" />
        <MembersItem alt="" src="/ellipse-7@2x.png" />
        <MembersItem alt="" src="/ellipse-8@2x.png" />
        <EllipseParent>
          <GroupChild />
          <B>+12</B>
        </EllipseParent>
      </Members>
    </EventcardRoot>
  );
};

export default EventCard;
