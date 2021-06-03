import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BetaLogo from 'components/atoms/BetaLogo';
import LoginButton from 'components/atoms/LoginButton';
import { Link } from 'react-router-dom';
import { Flex } from 'rebass';
import linkStyle from 'styles/link';
import { externaURL } from 'utils/url';

const navButtonStyle = css`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  color: #000000;
  ${linkStyle}
`;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
`;

const NavigationBar = () => {
  return (
    <Wrapper>
      <Flex width="1440px;" margin="auto" justifyContent="space-between">
        <BetaLogo />
        <Flex>
          <a href="#about" css={navButtonStyle}>
            About
          </a>
          <a href={externaURL.FAQ} target="_blank" rel="noopener noreferrer" css={navButtonStyle}>
            FAQ
          </a>
          <Link
            to="/login"
            css={css`
              ${navButtonStyle};
              margin-right: 10px;
            `}
          >
            회원가입
          </Link>
          <LoginButton text="로그인" />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default NavigationBar;
