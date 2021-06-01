import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/main/Card';
import NewCard from '../components/main/NewCard';
import { getCardData } from '../lib/api';
import { IData } from '../types';

function Main() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      if (data == null) return;
      data[year] && setUserData(data[year][month]);
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
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 2.5rem;
`;

export default Main;
