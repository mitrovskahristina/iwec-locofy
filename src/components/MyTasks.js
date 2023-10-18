import styled from "styled-components";
import Task from "./Task";

const MyTasks1 = styled.b`
  position: relative;
`;
const MytasksRoot = styled.div`
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

const MyTasks = () => {
  return (
    <MytasksRoot>
      <MyTasks1>My Tasks</MyTasks1>
      <Task />
    </MytasksRoot>
  );
};

export default MyTasks;
