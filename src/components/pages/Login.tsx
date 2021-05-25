import BackgroundContainer from 'components/atoms/BackgroundContainer';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Flex, Heading, Link as ExternalLink } from 'rebass';
import linkStyle from 'styles/link';
import Modal from 'components/atoms/Modal';

const internalLinkButtonStyle = css`
  font-size: 30px;
  font-weight: bold;
  ${linkStyle}
`;

const Login = () => {
  return (
    <BackgroundContainer padding="33px 324px">
      <Link to="/" css={internalLinkButtonStyle}>{`< 홈으로`}</Link>
      <Modal>
        <Flex flexDirection="column" height="100%" justifyContent="space-between">
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
      </Modal>
    </BackgroundContainer>
  );
};

export default Login;
