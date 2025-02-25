import styled from "styled-components";
import {useState} from "react";
const CalendarBody = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const onOpen = () => {
    setOpenModal(!openModal)
  }
  return (
      <>
        <Wrapper>
          <div>
            <LineBox>
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
            </LineBox>
          </div>
          <div>
            <LineBox>
              <PlanBox>djdjdj</PlanBox>
              <li onClick={onOpen}>
                29
                {openModal ? (
                    <ModalWrapper>
                      <ul>
                        <li>일정</li>
                        <li>할일</li>
                        <li>스티커</li>
                      </ul>
                    </ModalWrapper>
                ) : undefined}
              </li>
              <li>30</li>
              <li>31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </LineBox>
          </div>
          <div>
            <LineBox>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
            </LineBox>
          </div>
          <div>
            <LineBox>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
            </LineBox>
          </div>
          <div>
            <LineBox>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
            </LineBox>
          </div>
          <div>
            <LineBox>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
              <li>32</li>
            </LineBox>
          </div>
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
        li{
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
                border-radius: 8px;
            }
        }
    }
`
