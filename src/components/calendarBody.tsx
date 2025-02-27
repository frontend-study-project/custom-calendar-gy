import styled from "styled-components";
import {useEffect, useState} from "react";
import useCalendar from "../hooks/useCalendar.ts";
import CalendarHeader from "./calendarHeader.tsx";
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

const CalendarBody = () => {
  const { weekCalendarList  } = useCalendar();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onOpen = () => {
    setOpenModal(!openModal);
  };


  return (
      <>
        <Wrapper>
          <div>
            <LineBox>
              <>
                {DAY_LIST.map((week, weekIndex) => (
                    <li key={weekIndex}>{week}</li>
                ))}
              </>
            </LineBox>
          </div>
          <>
            {weekCalendarList.map((week, weekIndex) => (
                <div key={weekIndex}>
                  <LineBox>
                    <>
                      {week.map((day, dayIndex) =>
                          day === 0 ? (
                              // 빈 날짜인 경우 (0으로 설정된 날짜)
                              <li key={dayIndex}></li>
                          ) : (
                              <li key={dayIndex} onClick={onOpen}>
                                {day}
                                {openModal && (
                                    <ModalWrapper>
                                      <ul>
                                        <li>일정</li>
                                        <li>할일</li>
                                        <li>스티커</li>
                                      </ul>
                                    </ModalWrapper>
                                )}
                              </li>
                          )
                      )}
                    </>
                  </LineBox>
                </div>
            ))}
          </>
        </Wrapper>
      </>
  );
};
export default CalendarBody;

const Wrapper = styled.div`
    margin: 50px 0;
    > div:first-of-type {
        padding-bottom: 20px;
    }
    > div:not(:first-of-type) {
        > ul {
            border-top: 1px solid var(--color-gray);
            padding-top: 20px;
            > li {
                height: 100px;
            }
        }
    }
`;

const LineBox = styled.ul`
    position: relative;
    display: flex;
    li {
        position: relative;
        flex: 1;
        text-align: center;
    }
`;

const PlanBox = styled.span`
    background: rgb(63, 169, 245);
    position: absolute;
    left: 0;
    top: 40px;
    width: calc(100% / 7);
    border-radius: 8px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
`;

const ModalWrapper = styled.div`
    position: absolute;
    top: 30px;
    right: -100%;
    width: 100px;
    z-index: 1;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 12px 16px, rgba(0, 0, 0, 0.12) 6px 8px 24px;
    padding: 10px;
    text-align: left;
    ul {
        li {
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
                border-radius: 8px;
            }
        }
    }
`;
