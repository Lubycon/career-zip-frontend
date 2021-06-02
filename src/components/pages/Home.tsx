import { Flex } from 'rebass';
import HomeMainSection from 'components/molecules/HomeMainSection';
import HomeShareSection from 'components/molecules/HomeShareSection';
import HomeSubSection from 'components/molecules/HomeSubSection';
import NavigationBar from 'components/molecules/NavigationBar';
import LandingPageFooter from 'components/organisms/LandingPageFooter';

const Home = () => {
  return (
    <Flex flexDirection="column">
      <NavigationBar />
      <HomeMainSection />
      <HomeSubSection />
      <HomeShareSection />
      <LandingPageFooter />
    </Flex>
  );
};

export default Home;
