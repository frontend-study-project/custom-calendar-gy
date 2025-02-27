import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import CalendarHeader from "./components/calendarHeader";
import CalendarBody from "./components/calendarBody";
import useCalendar from "./hooks/useCalendar.ts";

function App() {
  const { weekCalendarList, currentDate, setCurrentDate, goToPreviousMonth, goToNextMonth, todayBtn } = useCalendar()

  return (
    <Container>
      <CalendarHeader
          currentDate={currentDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
          todayBtn={todayBtn}
      />
      <CalendarBody
          weekCalendarList={weekCalendarList}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1024px;
  margin: 100px auto;
  border-radius: 8px;
  background: var(--color-white);
  padding: 20px;
`;
