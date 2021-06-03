import HomeButton from 'components/molecules/HomeButton';
import NotFoundBackground from 'components/atoms/NotFoundBackground';
import { Flex } from 'rebass';

const NotFoundPage = () => {
  return (
    <NotFoundBackground>
      <Flex width="1440px" padding="30px 0 0 0" margin="0 auto">
        <HomeButton />
      </Flex>
    </NotFoundBackground>
  );
};

export default NotFoundPage;
