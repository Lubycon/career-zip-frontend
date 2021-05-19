import ATag from 'components/atoms/ATag';
import Footer from 'components/atoms/Footer';
import Logo from 'components/atoms/Logo';
import { Box, Flex, Text } from 'rebass';

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
          <ATag href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3">
            개인정보처리방침
          </ATag>
          <ATag href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3">
            Instagram
          </ATag>
        </Flex>
        <Flex flexDirection="column">
          <ATag href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3">
            FAQ
          </ATag>
          <ATag href="https://www.notion.so/public-test-page-ccad85ae25ae4a0082bf3905b169c1d3">
            업데이트 노트
          </ATag>
          <Text>제휴문의</Text>
        </Flex>
      </Flex>
    </Footer>
  );
};

export default LandingPageFooter;
