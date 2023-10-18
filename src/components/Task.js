import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const CreateASimple = styled.b`
  position: relative;
  display: flex;
  align-items: center;
  width: 16.19rem;
  flex-shrink: 0;
`;
const MoreVertIcon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.13rem;
`;
const Tasktitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
`;
const AssignedByJohn = styled.div`
  position: relative;
`;
const Taskinfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-41xl);
  font-size: var(--typography-caption-size);
  color: var(--color-gray-200);
`;
const Taskinformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Buttonscontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const TaskRoot = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--primary-contrast);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xl) var(--padding-3xl);
  gap: var(--gap-11xl);
  text-align: left;
  font-size: var(--typography-body2-size);
  color: var(--color-darkslategray-300);
  font-family: var(--font-lato);
`;

const Task = () => {
  return (
    <TaskRoot>
      <Taskinformation>
        <Tasktitle>
          <CreateASimple>{`Create a simple model using the tools from Edit Mode `}</CreateASimple>
          <MoreVertIcon alt="" src="/more-vert1.svg" />
        </Tasktitle>
        <Taskinfo>
          <AssignedByJohn>Due: 17.09.2023</AssignedByJohn>
          <AssignedByJohn>Assigned by: John Doe</AssignedByJohn>
        </Taskinfo>
      </Taskinformation>
      <Buttonscontainer>
        <SecondaryButton apply="Need Assistance" />
        <PrimaryButton apply="Mark as Done" />
      </Buttonscontainer>
    </TaskRoot>
  );
};

export default Task;
