import { css } from '@emotion/react';
import LoginPageBackground from 'components/atoms/LoginPageBackground';
import LoginModalContent from 'components/organisms/LoginModalContent';
import { Flex } from 'rebass';
import { modal } from 'styles/element';
import HomeButton from 'components/molecules/HomeButton';

const Login = () => {
  return (
    <LoginPageBackground>
      <Flex width="1440px" padding="30px 0" height="100%" margin="auto" flexDirection="column">
        <HomeButton />
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
