import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { monthState, yearState } from '../../states/index';
import { ReactComponent as Left } from '../../assets/icons/Left.svg';
import { ReactComponent as Right } from '../../assets/icons/Right.svg';

function Calendar() {
  const [year, setYear] = useRecoilState(yearState);
  const [month, setMonth] = useRecoilState(monthState);

  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const previousYear = () => {
    setYear(year => year - 1);
  };

  const nextYear = () => {
    setYear(year => year + 1);
  };

  return (
    <>
      <YearWrap>
        <Left onClick={previousYear} />
        <p>{year}년</p>
        <Right onClick={nextYear} />
      </YearWrap>
      <MonthWrap>
        {monthList.map(months => {
          return (
            <div
              key={months}
              onClick={() => {
                setMonth(month => months);
              }}
              style={months === month ? { fontSize: '2rem', fontWeight: 'bold' } : {}}
            >
              {months + 1}월
            </div>
          );
        })}
      </MonthWrap>
    </>
  );
}

const YearWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  margin-top: 1rem;

  & > p {
    width: 14rem;
    margin: 0 2.5rem;
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
  }

  &:hover svg line {
    stroke: black;
    cursor: pointer;
  }
`;

const MonthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  text-align: center;

  & > div {
    width: 5rem;
    font-size: 1.8rem;
  }

  & > div:hover {
    font-size: 2.2rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default Calendar;
