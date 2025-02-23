import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import CalendarHeader from "./components/calendarHeader";
import CalendarBody from "./components/calendarBody";

function App() {
  return (
    <Container>
      <CalendarHeader />
      <CalendarBody />
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
