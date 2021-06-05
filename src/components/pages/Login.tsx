import { useEffect } from 'react';
import { css } from '@emotion/react';
import { Flex, Text } from 'rebass';
import { useQueryStringAndParam } from 'hooks';
import useToast from 'hooks/useToast';
import { modal } from 'styles/element';
import LoginPageBackground from 'components/atoms/LoginPageBackground';
import LoginModalContent from 'components/organisms/LoginModalContent';
import HomeButton from 'components/molecules/HomeButton';
import { DARK_GRAY } from 'styles/colors';

const Login = () => {
  const { error } = useQueryStringAndParam<{
    error: string;
  }>().query;

  const { handleShowToast, renderToast } = useToast(4000);

  useEffect(() => {
    if (error === 'invalid-auth') {
      handleShowToast();
    }
  }, [error]);

  return (
    <LoginPageBackground>
      {renderToast(
        <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
          로그인 과정에서 오류가 발생하였습니다. 다시 시도해주세요.
        </Text>
      )}
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
