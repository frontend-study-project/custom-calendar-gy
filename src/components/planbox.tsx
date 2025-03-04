import React from 'react';
import styled from "styled-components";

interface PlanBoxProps {
  title: string;
  startDate: string;
  endDate: string;
  randomColor: String
}

const PlanBox = ({ title, startDate, endDate, randomColor }: PlanBoxProps) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return (
      <PlanBoxWrapper randomColor={randomColor}>
        {/*<h4>{title}</h4>*/}
        {/*<p>{start.toLocaleTimeString()} - {end.toLocaleTimeString()}</p>*/}
      </PlanBoxWrapper>
  );
};

export default PlanBox;


const PlanBoxWrapper = styled.div<{ randomColor: string }>`
    background: ${({ randomColor }) => randomColor};
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    font-size: 12px;
    color: #fff;
`;