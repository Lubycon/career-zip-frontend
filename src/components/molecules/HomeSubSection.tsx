import { Link } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass';
import { mainLoginButton } from 'styles/link';

const HomeSubSection = () => {
  return (
    <Flex
      id="#about"
      width="1440px"
      margin="auto"
      padding="222px 0"
      justifyContent="center"
      alignItems="center"
    >
      <Box minWidth="659px" minHeight="496px" backgroundColor="lightGray" />
      <Flex flexDirection="column" marginLeft="123px">
        <Text fontSize="46px" fontWeight="bold" lineHeight="64.4px">
          바쁘게 돌아가는 프로젝트 속에서 <br /> 나의 커리어 중간 저장하기
        </Text>
        <Text fontSize="20px" lineHeight="32px">
          막상 이력서를 작성할 때 어떤 일을 해왔는지 가물가물한 경험이 있지 않으셨나요?
        </Text>
        <Text fontSize="20px" lineHeight="32px" marginBottom="56px">
          Career.zip과 함께 커리어를 아카이빙 해보세요!
        </Text>
        <Link to="/login" css={mainLoginButton}>
          커리어 아카이빙 하러 가기
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeSubSection;
