import { Flex, Heading, Link as ExternalLink } from 'rebass';

const LoginModalContent = () => {
  return (
    <Flex flexDirection="column" height="100%" justifyContent="space-between" padding="60px">
      <Heading as="h1" fontSize="52px" marginBottom="auto" textAlign="center">
        커리어 세이브 포인트
        <br />
        Career.zip
      </Heading>
      <Flex flexDirection="column" marginTop="auto">
        <ExternalLink
          backgroundColor="blue"
          textAlign="center"
          fontSize="30px"
          color="#fff"
          padding="8px"
          href={process.env.OAUTH_GOOGLE}
        >
          구글계정으로 빠르게 로그인
        </ExternalLink>
        <ExternalLink
          backgroundColor="green"
          textAlign="center"
          fontSize="30px"
          color="#fff"
          padding="8px"
          marginTop="40px"
          href={process.env.OAUTH_NAVER}
        >
          네이버계정으로 빠르게 로그인
        </ExternalLink>
      </Flex>
    </Flex>
  );
};

export default LoginModalContent;
