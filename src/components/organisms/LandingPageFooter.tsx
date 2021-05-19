import { Box, Flex, Text } from 'rebass';
import Footer from 'components/atoms/Footer';
import Logo from 'components/atoms/Logo';
import LinkButton from 'components/atoms/LinkButton';

const LandingPageFooter = () => {
  return (
    <Footer>
      <Flex bg="gray" height="450px" justifyContent="space-between" padding="100px 300px">
        <Box>
          <Logo />
          <Text>
            커리어 세이브 포인트 <br /> Career.zip
          </Text>
        </Box>
        <Flex flexDirection="column">
          <Text>Contact : official@career-zip.com</Text>
          <LinkButton
            href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3"
            margin="10px 0 0 0"
          >
            개인정보처리방침
          </LinkButton>
          <LinkButton
            href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3"
            margin="10px 0 0 0"
          >
            Instagram
          </LinkButton>
        </Flex>
        <Flex flexDirection="column">
          <LinkButton href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3">
            FAQ
          </LinkButton>
          <LinkButton
            href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3"
            margin="10px 0 0 0"
          >
            업데이트 노트
          </LinkButton>
          <Text margin="10px 0 0 0">제휴문의</Text>
        </Flex>
      </Flex>
    </Footer>
  );
};

export default LandingPageFooter;
