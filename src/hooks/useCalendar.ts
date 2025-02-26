import { getDaysInMonth, addMonths, subMonths } from "date-fns";
import React, { useState, useMemo } from "react";

const DATE_MONTH_FIXER = 1;
const CALENDAR_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

type WeekCalendar = number[][];

interface UseCalendarReturn {
  weekCalendarList: WeekCalendar;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const useCalendar = (): UseCalendarReturn => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);

  // 현재 달의 첫 날이 몇 요일인지 확인
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const firstDayIndex = firstDayOfMonth.getDay(); // 0(일)부터 6(토)

  // 이전 달의 날짜 리스트 계산
  const prevDayList = useMemo(() =>
          Array.from({
            length: firstDayIndex, // 첫 날 전의 빈 칸
          }).map(() => DEFAULT_TRASH_VALUE),
      [firstDayIndex]
  );

  // 현재 달의 날짜 리스트 계산
  const currentDayList = useMemo(() =>
          Array.from({ length: totalMonthDays }).map(
              (_, i) => i + 1,
          ),
      [totalMonthDays]
  );

  // 다음 달의 날짜 리스트 계산
  const nextDayList = useMemo(() =>
          Array.from({
            length: CALENDAR_LENGTH - currentDayList.length - prevDayList.length,
          }).map(() => DEFAULT_TRASH_VALUE),
      [currentDayList.length, prevDayList.length]
  );

  // 모든 날짜 리스트 결합
  const currentCalendarList = useMemo(() =>
          prevDayList.concat(currentDayList, nextDayList),
      [prevDayList, currentDayList, nextDayList]
  );

  // 주별 캘린더 리스트로 변환
  const weekCalendarList = useMemo(() =>
          currentCalendarList.reduce((acc: WeekCalendar, cur, idx) => {
            const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
            if (!acc[chunkIndex]) {
              acc[chunkIndex] = [];
            }
            acc[chunkIndex].push(cur);
            return acc;
          }, []),
      [currentCalendarList]
  );

  const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
    goToPreviousMonth,
    goToNextMonth,
  };
};

export default useCalendar;
