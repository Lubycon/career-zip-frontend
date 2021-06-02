import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import linkStyle from 'styles/link';
import LoginPageBackground from 'components/atoms/LoginPageBackground';
import LoginModalContent from 'components/organisms/LoginModalContent';
import { Flex } from 'rebass';
import { modal } from 'styles/element';

const homeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  background: rgba(122, 160, 255, 0.5);
  color: #fff;
  ${linkStyle}

  >img {
    margin-right: 10px;
  }
`;

const Login = () => {
  return (
    <LoginPageBackground>
      <Flex width="1440px" padding="30px 0" height="100%" margin="auto" flexDirection="column">
        <Link to="/" css={homeButton}>
          <img src="/public/icons/left_arrow.svg" alt="left arrow" /> 홈으로
        </Link>
        <div
          css={css`
            ${modal};
            width: fit-content;
            margin: auto 0;
          `}
        >
          <LoginModalContent />
        </div>
      </Flex>
    </LoginPageBackground>
  );
};

export default Login;
