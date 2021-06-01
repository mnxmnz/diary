import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <FooterWrap>Copyright&copy; 2021. BE SOPT Web part. All rights reserved.</FooterWrap>;
}

const FooterWrap = styled.div`
  height: 9.1rem;
  color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
