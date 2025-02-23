import styled from "styled-components";

const CalendarHeader = () => {
  const prevBtn = () => {
    alert("이전!");
  };
  const nextBtn = () => {
    alert("다음!");
  };
  const todayBtn = () => {
    alert("오늘");
  };
  return (
    <Wrapper>
      <h1>2025.02</h1>
      <div>
        <Button onClick={prevBtn}>이전</Button>
        <Button onClick={nextBtn}>다음</Button>
        <Button onClick={todayBtn}>오늘</Button>
      </div>
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
