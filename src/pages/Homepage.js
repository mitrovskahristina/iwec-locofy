import Navbar from "../components/Navbar";
import DashboardContainer from "../components/DashboardContainer";
import styled from "styled-components";

const HomepageRoot = styled.div`
  position: relative;
  background-color: #f5f6f6;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const HomepageLaptopScreenSize = () => {
  return (
    <HomepageRoot>
      <Navbar />
      <DashboardContainer />
    </HomepageRoot>
  );
};

export default HomepageLaptopScreenSize;
