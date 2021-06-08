import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/icons/Menu.svg';
import { ReactComponent as Profile } from '../../assets/icons/Profile.svg';

function MainHeader() {
  return (
    <>
      <HeaderWrap>
        <Menu />
        <Link to="/">
          <div>Diary</div>
        </Link>
        <Profile />
      </HeaderWrap>
      <div style={style}></div>
    </>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  a {
    font-size: 3.6rem;
    font-style: italic;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.purple};
  }

  svg > circle:nth-child(1) {
    fill: ${({ theme }) => theme.colors.purple};
  }
`;

const style = {
  width: '100%',
  height: '1.3rem',
  background: 'linear-gradient(90deg, white, #A29BFE)',
  marginTop: '2.4rem',
  borderRadius: '1rem',
};

export default MainHeader;
