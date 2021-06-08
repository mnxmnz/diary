import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IData } from '../types';
import { getCardData } from '../lib/api';
import Card from '../components/main/Card';
import NewCard from '../components/main/NewCard';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { yearState, monthState, rawDataState, userDataState } from '../states/index';

function Main() {
  const year = useRecoilValue(yearState);
  const month = useRecoilValue(monthState);

  const setRawData = useSetRecoilState(rawDataState);

  const [userData, setUserData] = useRecoilState(userDataState);

  useEffect(() => {
    (async () => {
      const data = await getCardData();

      if (data == null) return;

      setRawData(data);
      setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      {userData &&
        userData.map((data: IData, index: number) => {
          return <Card key={index} userData={data} />;
        })}
      <NewCard />
    </MainWrap>
  );
}

const MainWrap = styled.div`
  width: 62.5vw;
  display: flex;
  flex-wrap: wrap;
`;

export default Main;
