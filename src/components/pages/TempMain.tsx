import { css } from '@emotion/react';
import BetaLogoGray from 'components/atoms/BetaLogoGray';
import LoginPageBackground from 'components/atoms/LoginPageBackground';
import HomeButton from 'components/molecules/HomeButton';
import { externaURL } from 'utils/url';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';
import { modal } from 'styles/element';
import { mainLoginButton } from 'styles/link';

const TempMain = () => (
  <LoginPageBackground>
    <Flex width="1440px" padding="30px 0" height="100%" margin="auto" flexDirection="column">
      <HomeButton />
      <div
        css={css`
          ${modal};
          width: 786px;
          margin: auto;
        `}
      >
        <Flex flexDirection="column" width="100%" padding="43px" textAlign="center">
          <BetaLogoGray />
          <Text fontSize="46px" marginTop="52px">
            ✨
          </Text>
          <Text fontSize="32px" lineHeight="44.8px" marginTop="17px">
            커리어집은 <span>6월 10일</span>까지 사전 신청 중!
          </Text>
          <Text
            fontSize="20px"
            fontWeight="bold"
            color={GRAY[2]}
            lineHeight="32px"
            marginTop="20px"
          >
            2021년 6월 11일부터 커리어 아카이빙을 하실 수 있어요.
          </Text>
          <Text fontSize="20px" color={GRAY[2]} lineHeight="32px" marginTop="3px">
            조금만 기다려 주세요. 가입하신 이메일로 소식 보내드릴게요!
          </Text>
          <button
            type="button"
            css={css`
              ${mainLoginButton};
              width: 300px;
              margin: 80px auto auto auto;
            `}
          >
            주변사람들에게 소문내기
          </button>
          <a
            href={externaURL.feedbackForm}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              text-decoration: none;
              font-size: 16px;
              color: ${GRAY[2]};
              margin-top: 20px;
              margin-bottom: 51px;
            `}
          >
            커리어집팀에게 피드백 보내기
          </a>
        </Flex>
      </div>
    </Flex>
  </LoginPageBackground>
);

export default TempMain;
