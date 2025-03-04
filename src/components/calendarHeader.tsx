import styled from "styled-components";
import useCalendar from "../hooks/useCalendar.ts";

const CalendarHeader = ({currentDate, goToPreviousMonth, goToNextMonth, todayBtn, openSchedule ,setOpenSchedule}) => {
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

  return (
    <Wrapper>
      <h1>{year}.{month}</h1>
      <div>
        <Button onClick={goToPreviousMonth}>이전</Button>
        <Button onClick={goToNextMonth}>다음</Button>
        <Button onClick={todayBtn}>오늘</Button>
      </div>
      <Button onClick={() => setOpenSchedule(true)}>일정추가</Button>
    </Wrapper>
  );
};
export default CalendarHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  h1 {
    font-size: 32px;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
`;
