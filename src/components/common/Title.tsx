import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function Title({ history }: RouteComponentProps<{}>) {
  const title = history.location.pathname === '/' ? '이번 달 일기' : '오늘의 일기';
  return <TitleWrap>{title}</TitleWrap>;
}

const TitleWrap = styled.div`
  height: 9.2rem;
  font-size: 3.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export default withRouter(Title);
