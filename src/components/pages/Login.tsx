import { useEffect } from 'react';
import { css } from '@emotion/react';
import { Flex, Text } from 'rebass';
import { useQueryStringAndParam } from 'hooks/useQueryStringAndParam';
import { logger } from '@lubycon/utils';

import { modal } from 'styles/element';
import LoginPageBackground from 'components/atoms/LoginPageBackground';
import LoginModalContent from 'components/organisms/LoginModalContent';
import HomeButton from 'components/molecules/HomeButton';
import { DARK_GRAY } from 'styles/colors';
import { useToast } from 'context/Toast';

const loginPageLogger = logger.getPageLogger('login_page');

const Login = () => {
  const { error } = useQueryStringAndParam<{
    error: string;
  }>().query;

  const { showToast } = useToast();

  useEffect(() => {
    loginPageLogger.view();
  }, []);

  useEffect(() => {
    if (error) {
      showToast({
        duration: 4000,
        message: (
          <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
            {error === 'expired-auth'
              ? '인증 정보가 만료되었습니다. 다시 로그인해주세요.'
              : '로그인이 필요합니다.'}
          </Text>
        ),
      });
    }
  }, [error]);

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
