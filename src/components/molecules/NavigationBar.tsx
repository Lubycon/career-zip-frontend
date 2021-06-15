import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Flex } from 'rebass';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BetaLogo from 'components/atoms/BetaLogo';
import useLoginStatus from 'hooks/useLoginStatus';
import linkStyle from 'styles/link';
import { externaURL } from 'utils/url';
import Button from 'components/atoms/Button';

const navButtonStyle = css`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  color: #000000;
  ${linkStyle}
`;

const PrimaryButton = styled(Button)`
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
`;

const NavigationBar = () => {
  const history = useHistory();
  const { isLoggedIn } = useLoginStatus();

  return (
    <Wrapper>
      <Flex width="1440px" margin="auto" justifyContent="space-between">
        <BetaLogo />
        <Flex>
          <a href="#about" css={navButtonStyle}>
            About
          </a>
          <a href={externaURL.FAQ} target="_blank" rel="noopener noreferrer" css={navButtonStyle}>
            FAQ
          </a>
          {isLoggedIn ? (
            <PrimaryButton
              width="112px"
              height="30px"
              fontSize="16px"
              onClick={() => history.push('/archiving-list')}
            >
              메인으로
            </PrimaryButton>
          ) : (
            <>
              <Link
                to="/login"
                css={css`
                  ${navButtonStyle};
                  margin-right: 10px;
                `}
              >
                회원가입
              </Link>
              <PrimaryButton
                width="112px"
                height="30px"
                fontSize="16px"
                onClick={() => history.push('/login')}
              >
                로그인
              </PrimaryButton>
            </>
          )}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default NavigationBar;
