import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';
import linkStyle from 'styles/link';

const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: auto;
  font-weight: bold;
  text-align: left;
  line-height: 44.8px;
  > span {
    display: block;
  }
`;

const SNSLoginButton = styled.a`
  display: flex;
  width: 444px;
  height: 62px;
  font-size: 20px;
  justify-content: flex-start;
  padding-left: 105px;
  align-items: center;
  background-color: ${GRAY[4]};
  border: 1px solid #b0b8c1;
  border-radius: 10px;
  color: ${GRAY[2]};
  ${linkStyle};

  > img {
    margin-right: 24px;
  }

  :last-of-type {
    margin-top: 10px;
  }
`;

const Link = styled.a`
  font-size: 10px;
  color: ${GRAY[3]};
`;

const LoginModalContent = () => {
  return (
    <Flex flexDirection="column" height="100%" alignItems="flex-start" padding="58px">
      <H1>
        <Text>Career.zip</Text>
        <Text>커리어 세이브 포인트</Text>
      </H1>
      <Text fontSize="16px" color={GRAY[2]} marginTop="10px">
        일주일에 한 번, 나의 프로젝트를 기록하는 시간을 가져봐요!
      </Text>
      <Flex flexDirection="column" marginTop="30px">
        <SNSLoginButton href={process.env.OAUTH_GOOGLE}>
          <img alt="google icon" src="/public/icons/google_logo.svg" />
          구글계정으로 로그인
        </SNSLoginButton>
        <SNSLoginButton href={process.env.OAUTH_NAVER}>
          <img alt="google icon" src="/public/icons/naver_logo.svg" />
          네이버계정으로 로그인
        </SNSLoginButton>
      </Flex>
      <Text fontSize="10px" color={GRAY[3]} marginTop="8px">
        로그인은
        <Link
          href="https://www.notion.so/ca21bfd4ba7b47f28fd5f3581b4f50bf"
          target="_blank"
          rel="noreferrer"
        >
          개인정보 수집 및 활용
        </Link>
        ,
        <Link
          href="https://www.notion.so/c78a643351b64cf0840c253e1827c97c"
          target="_blank"
          rel="noreferrer"
        >
          이용약관
        </Link>
        에 동의함을 의미합니다.
      </Text>
    </Flex>
  );
};

export default LoginModalContent;
