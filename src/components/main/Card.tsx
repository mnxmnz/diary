import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICardData } from '../../types';
import { ReactComponent as EmptyImg } from '../../assets/icons/Photo.svg';

function Card({ userData }: ICardData) {
  const { id, date, title, image, weather, tags } = userData;

  const getDateFormat = (date: number) => {
    const year = Math.floor((date % 10000) / 100);
    const day = date % 100;

    return `${year}월 ${day}일`;
  };

  return (
    <Link to={`/detail/${id}`}>
      <CardWrap>
        <Image>{image ? <UserImg src={image} alt="" /> : <EmptyImg />}</Image>
        <Header>
          <div>{getDateFormat(date)}</div>
          <Weather>{weather}</Weather>
        </Header>
        <Title>{title ? title : '제목 없음'}</Title>
        <Tags>
          {tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </Tags>
      </CardWrap>
    </Link>
  );
}

const CardWrap = styled.div`
  box-sizing: border-box;
  width: 22rem;
  height: 25.7rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  margin-right: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const Image = styled.div`
  height: 14.8rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray_01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  width: 22rem;
  height: 14.8rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  object-fit: cover;
`;

const Header = styled.div`
  margin: 0.9rem 1.2rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Weather = styled.div`
  color: ${({ theme }) => theme.colors.purple};
`;

const Title = styled.div`
  font-size: 1.7rem;
  height: 2.5rem;
  margin: 0 1.2rem;
  padding-top: 0.4rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  margin: 0.9rem 1.2rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.purple};
`;

const Tag = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 0.4rem 1.1rem;
  border-radius: 0.5rem;
  margin-right: 0.7rem;
  max-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Card;
