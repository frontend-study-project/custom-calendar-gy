import React from 'react';
import styled from "styled-components";

interface PlanBoxProps {
  title: string;
  startDate: string;
  endDate: string;
  randomColor: String;
  index: number;
}

const PlanBox = ({ title, startDate, endDate, randomColor, index }: PlanBoxProps) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return (
      <PlanBoxWrapper index={index}>
        {/*<h4>{title}</h4>*/}
        {/*<p>{start.toLocaleTimeString()} - {end.toLocaleTimeString()}</p>*/}
      </PlanBoxWrapper>
  );
};

export default PlanBox;


const PlanBoxWrapper = styled.div<{ index: number }>`
    background: rgb(63, 169, 245);
    position: absolute;
    left: 0;
    top: ${({index}) => `${40 + index * 20}px`};
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    font-size: 12px;
    color: #fff;
`;