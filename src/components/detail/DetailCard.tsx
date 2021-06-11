import React from 'react';
import styled from 'styled-components';
import { IData } from '../../types/index';
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../states/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function DetailCard({ match }: RouteComponentProps<{}>) {
  const isReadOnly = match.path === '/diary/:id' ? true : false;

  const data: IData = useRecoilValue(userDataState as any);

  const { title, date, image, weather, tags, summary, text } = data;

  return (
    <CardWrap>
      <p>{title}</p>
      <p>{date}</p>
      <img src={image} width="200" alt="" />
      <p>{weather}</p>
      <p>{tags}</p>
      <p>{summary}</p>
      <p>{text}</p>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 78.5rem;
  height: 60rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  margin: 0 auto;
`;

export default withRouter(DetailCard);
