import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/main/Card';
import NewCard from '../components/main/NewCard';
import { useRecoilValue } from 'recoil';
import { yearState, monthState } from '../states/index';
import { getCardData } from '../lib/api';
import { IData } from '../types';

function Main() {
  const year = useRecoilValue(yearState);
  const month = useRecoilValue(monthState);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      if (data == null) return;
      setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <>
      <MainWrap>
        {userData &&
          userData.map((data: IData, index: number) => {
            return <Card key={index} userData={data} />;
          })}
      </MainWrap>
      <NewCard />
    </>
  );
}

const MainWrap = styled.div`
  width: 62.5vw;
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 2.5rem;
`;

export default Main;
