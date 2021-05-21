import { css } from '@emotion/react';
import LoginButton from 'components/atoms/LoginButton';
import Logo from 'components/atoms/Logo';
import { Flex } from 'rebass';
import linkStyle from 'styles/link';
import { externaURL } from 'utils/url';

const navButtonStyle = css`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  ${linkStyle}
`;

const NavigationBar = () => {
  return (
    <Flex bg="lightBlue" justifyContent="space-between" padding="10px 80px">
      <Logo />
      <Flex>
        <a href="#about" css={navButtonStyle}>
          About
        </a>
        <a href={externaURL.FAQ} target="_blank" rel="noopener noreferrer" css={navButtonStyle}>
          FAQ
        </a>
        <LoginButton text="로그인" />
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
