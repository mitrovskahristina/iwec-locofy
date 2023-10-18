import styled from "styled-components";

const March2019 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 150%;
  font-weight: 500;
`;
const ArrowdropdownfilledIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Iconbutton1 = styled.div`
  border-radius: var(--br-81xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8xs);
`;
const CurrentMonth = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const Controls = styled.div`
  height: 2.06rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Row = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-xs) var(--padding-5xs)
    var(--padding-5xl);
  text-align: left;
`;
const Su = styled.div`
  position: relative;
  letter-spacing: 0.4px;
  line-height: 166%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.5rem;
  flex-shrink: 0;
`;
const Row1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-11xs);
  font-size: var(--typography-caption-size);
  color: var(--text-disabled);
`;
const Div = styled.div`
  position: relative;
  letter-spacing: 0.17px;
  line-height: 143%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;
const Row2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-9xl);
`;
const Row3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-11xs);
`;
const Div11 = styled.div`
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 20px);
  letter-spacing: 0.17px;
  line-height: 143%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.25rem;
`;
const Active = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-81xl);
  background-color: var(--color-cornflowerblue-100);
  width: 2.25rem;
  height: 2.25rem;
`;
const Mask = styled.div`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
  color: var(--primary-contrast);
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Dates = styled.div`
  align-self: stretch;
  height: 16.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-11xs);
  font-size: var(--typography-body2-size);
`;
const Desktopdatepicker = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-3xs);
  background-color: var(--primary-contrast);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CalendarRoot = styled.div`
  position: relative;
  width: 20rem;
  height: 22.63rem;
  text-align: center;
  font-size: var(--datepicker-currentmonth-size);
  color: var(--color-darkslategray-400);
  font-family: var(--typography-body2);
`;

const Calendar = () => {
  return (
    <CalendarRoot>
      <Desktopdatepicker>
        <Row>
          <CurrentMonth>
            <March2019>September</March2019>
            <March2019>2023</March2019>
            <Iconbutton1>
              <Icon1>
                <ArrowdropdownfilledIcon
                  alt=""
                  src="/arrowdropdownfilled.svg"
                />
              </Icon1>
            </Iconbutton1>
          </CurrentMonth>
          <Controls>
            <Iconbutton1>
              <Icon1>
                <ArrowdropdownfilledIcon alt="" src="/chevronleftfilled1.svg" />
              </Icon1>
            </Iconbutton1>
            <Iconbutton1>
              <Icon1>
                <ArrowdropdownfilledIcon
                  alt=""
                  src="/chevronrightfilled1.svg"
                />
              </Icon1>
            </Iconbutton1>
          </Controls>
        </Row>
        <Row1>
          <Su>S</Su>
          <Su>M</Su>
          <Su>T</Su>
          <Su>W</Su>
          <Su>T</Su>
          <Su>F</Su>
          <Su>S</Su>
        </Row1>
        <Dates>
          <Row2>
            <Container>
              <Div>1</Div>
              <Div>2</Div>
            </Container>
          </Row2>
          <Row3>
            <Div>2</Div>
            <Div>3</Div>
            <Div>4</Div>
            <Div>5</Div>
            <Div>6</Div>
            <Div>7</Div>
            <Div>8</Div>
          </Row3>
          <Row3>
            <Div>9</Div>
            <Div>10</Div>
            <Mask>
              <Active>
                <Div11>11</Div11>
              </Active>
            </Mask>
            <Div>12</Div>
            <Div>13</Div>
            <Div>14</Div>
            <Div>15</Div>
          </Row3>
          <Row3>
            <Div>16</Div>
            <Div>17</Div>
            <Div>18</Div>
            <Div>19</Div>
            <Div>20</Div>
            <Div>21</Div>
            <Div>22</Div>
          </Row3>
          <Row3>
            <Div>23</Div>
            <Div>24</Div>
            <Div>25</Div>
            <Div>26</Div>
            <Div>27</Div>
            <Div>28</Div>
            <Div>29</Div>
          </Row3>
          <Row2>
            <Container1>
              <Div>30</Div>
              <Div>31</Div>
            </Container1>
          </Row2>
        </Dates>
      </Desktopdatepicker>
    </CalendarRoot>
  );
};

export default Calendar;
