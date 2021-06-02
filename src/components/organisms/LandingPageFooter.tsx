import styled from '@emotion/styled';
import { Box, Flex, Text } from 'rebass';
import { externaURL } from 'utils/url';
import { GRAY } from 'styles/colors';
import linkStyle from 'styles/link';
import GrayLogo from 'components/atoms/GrayLogo';
import React from 'react';

const Footer = styled.footer`
  background-color: ${GRAY[4]};
  justify-content: space-between;
  padding: 180px 0;
  a {
    width: 224px;
    margin-right: 20px;
    font-size: 16px;
    color: ${GRAY[2]};
    height: 40px;
    ${linkStyle}
  }
`;

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const LandingPageFooter = () => {
  return (
    <Footer>
      <Flex width="1440px" margin="auto" justifyContent="center" alignItems="center">
        <Box>
          <GrayLogo />
          <Text fontSize="20px" lineHeight="32px" color={GRAY[3]} marginTop="10px">
            커리어 세이브 포인트
          </Text>
        </Box>
        <Flex marginLeft="283px">
          <Flex flexDirection="column">
            <ExternalLink href="mailto:official@career-zip.com">
              official@career-zip.com
            </ExternalLink>
            <ExternalLink href={externaURL.privacyPolicy}>이용약관</ExternalLink>
          </Flex>
          <Flex flexDirection="column">
            <ExternalLink href={externaURL.instagram}>Instagram</ExternalLink>
            <ExternalLink href={externaURL.updateNote}>업데이트 노트</ExternalLink>
          </Flex>
          <Flex flexDirection="column">
            <ExternalLink href={externaURL.FAQ}>FAQ</ExternalLink>
            <ExternalLink href="mailto:official@career-zip.com">제휴문의</ExternalLink>
          </Flex>
        </Flex>
      </Flex>
    </Footer>
  );
};

export default LandingPageFooter;
