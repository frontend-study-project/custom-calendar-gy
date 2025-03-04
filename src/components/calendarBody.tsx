import styled from "styled-components";
import {useEffect, useState} from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PlanBox from "./planbox.tsx";
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];
interface IScheduleProps {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

const CalendarBody = ({weekCalendarList, openSchedule, setOpenSchedule}) => {
  const [scheduleData, setScheduleData] = useState<IScheduleProps[]>([])
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "hour"));

  const getScheduleData = async () => {
    try{
      const response = await fetch("http://localhost:5001/schedules", {
        method: "GET",
      })
      const data = await response.json();
      setScheduleData(data)

    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getScheduleData();
  }, []);


  const handleSave = async () => {
    const newSchedule = {
      title,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };

    try {
      const response = await fetch("http://localhost:5001/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSchedule),
      });

      if (response.ok) {
        alert("일정이 추가되었습니다!");
        setTitle("");
        setStartDate(dayjs());
        setEndDate(dayjs().add(1, "hour"));
        setOpenSchedule(false);
      } else {
        alert("일정 추가 실패!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류 발생!");
    }
  };

  const getPlansForDay = (day: number) => {
    return scheduleData.filter(schedule => {
      const startDate = new Date(schedule.startDate);
      const endDate = new Date(schedule.endDate);

      const isWithinRange = startDate.getDate() <= day && endDate.getDate() >= day;

      return isWithinRange;
    });
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
                              <li key={dayIndex}>
                                <div>
                                  {day}
                                  {getPlansForDay(day).map(plan => (
                                      <PlanBox
                                          key={plan.id}
                                          title={plan.title}
                                          startDate={plan.startDate}
                                          endDate={plan.endDate}
                                      />
                                  ))}
                                </div>
                              </li>
                          )
                      )}
                    </>
                  </LineBox>
                  {openSchedule && (
                      <Modal
                          open={openSchedule}
                          onClose={() => setOpenSchedule(false)}
                          BackdropProps={{
                            sx: { backgroundColor: "rgba(0,0,0,25)" }
                          }}
                      >
                        <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: 400,
                              bgcolor: "background.paper",
                              boxShadow: 24,
                              p: 4,
                              borderRadius: 2,
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                        >
                          <TextField
                              label="일정 제목"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              fullWidth
                          />
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="시작 날짜 및 시간"
                                value={startDate}
                                onChange={setStartDate}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                            <DateTimePicker
                                label="종료 날짜 및 시간"
                                value={endDate}
                                onChange={setEndDate}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                          </LocalizationProvider>
                          <Box display="flex" justifyContent="flex-end" gap={1}>
                            <Button color="error" variant="outlined" onClick={() => setOpenSchedule(false)}>취소</Button>
                            <Button onClick={handleSave} variant="contained">저장</Button>
                          </Box>
                        </Box>
                      </Modal>
                  )}
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
    justify-content: flex-start;
    li {
        position: relative;
        width: calc(100% / 7);
        text-align: center;
    }
`;


