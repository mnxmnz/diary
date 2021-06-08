import React, { useRef } from 'react';
import styled from 'styled-components';
import { IRawData } from '../../types';
import { createCardData } from '../../lib/api';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { yearState, monthState, rawDataState, userDataState } from '../../states/index';

function NewCard() {
  const year = useRecoilValue(yearState);
  const month = useRecoilValue(monthState);
  const rawData = useRecoilValue(rawDataState);

  const setUserData = useSetRecoilState(userDataState);

  const nextId = useRef(7);

  const getDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1 + '';
    const day = now.getDate() + '';
    const monthF = month.length < 2 ? 0 + month : month;
    const dayF = day.length < 2 ? 0 + day : day;

    return parseInt(year + monthF + dayF);
  };

  const createCard = async () => {
    const cardForm: IRawData = {
      date: getDate(),
      id: nextId.current,
      title: '',
      image: '',
      weather: '',
      tags: [],
      summary: '',
      text: '',
    };

    rawData[year][month].push(cardForm);

    const data = await createCardData(rawData);

    data[year] && setUserData(data[year][month]);

    nextId.current += 1;
  };

  return <NewCardWrap onClick={createCard}>+ 추가해주세요</NewCardWrap>;
}

const NewCardWrap = styled.div`
  box-sizing: border-box;
  width: 22rem;
  height: 25.7rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.purple};
  margin-right: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export default NewCard;
