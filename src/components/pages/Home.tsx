import LoginButton from 'components/atoms/LoginButton';
import Section from 'components/atoms/Section';
import NavigationBar from 'components/molecules/NavigationBar';
import LandingPageFooter from 'components/organisms/LandingPageFooter';
import { Button, Flex, Heading, Image, Text } from 'rebass';

const Home = () => {
  return (
    <Flex flexDirection="column">
      <NavigationBar />
      <Section height="700px" backgroundColor="lightGray" padding="170px 0">
        <Heading as="h1" fontSize="52px" fontWeight="bold" textAlign="center" marginBottom="auto">
          커리어 세이브 포인트 <br /> Career.zip
        </Heading>
        <LoginButton text="가입하기" />
      </Section>
      <Section id="about" height="1000px" padding="120px 0">
        <Heading as="h2" fontSize="46px" fontWeight="bold" marginBottom="40px">
          ABOUT
        </Heading>
        <Text>커리어집은 킹왕장 므찐 써비스</Text>
        <Text>커리어집은 킹왕장 므찐 써비스</Text>
        <Flex marginTop="40px" marginBottom="auto">
          <Image
            width="300px"
            marginRight="10px"
            src="http://vignette2.wikia.nocookie.net/nyancat/images/d/d7/Donutcat.gif"
          />
          <Image
            width="300px"
            marginRight="10px"
            src="http://vignette2.wikia.nocookie.net/nyancat/images/d/d7/Donutcat.gif"
          />
          <Image
            width="300px"
            src="http://vignette2.wikia.nocookie.net/nyancat/images/d/d7/Donutcat.gif"
          />
        </Flex>
        <LoginButton text="가입하기" />
      </Section>
      <Section backgroundColor="lightGray" height="760px" padding="190px 0">
        <Heading as="h2" fontSize="46px" fontWeight="bold">
          주변 지인과 공유하고 함께 성장하세요!
        </Heading>
        <Text fontSize="20px" margin="20px 0 0 0">
          현재 000명이 공유 중
        </Text>
        <Button backgroundColor="blue" marginTop="auto">
          함께 성장하기
        </Button>
      </Section>
      <LandingPageFooter />
    </Flex>
  );
};

export default Home;
