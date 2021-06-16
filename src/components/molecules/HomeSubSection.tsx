import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { logger } from '@lubycon/utils';
import { Flex, Text } from 'rebass';
import { mainLoginButton } from 'styles/link';
import useLoginStatus from 'hooks/useLoginStatus';

const landingPageLogger = logger.getPageLogger('landing_page');

const Button = styled.button`
  ${mainLoginButton}
`;

const HomeSubSection = () => {
  const history = useHistory();
  const { isLoggedIn } = useLoginStatus();

  const handleClick = (path: string, title: string) => {
    landingPageLogger.click('click_sub_section_button', {
      path,
      title,
    });
    history.push(path);
  };

  return (
    <Flex id="about" margin="auto" padding="222px 0" justifyContent="center" alignItems="center">
      <img alt="main page preview" src="public/images/landing_img.png" />
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
        <Button
          onClick={() =>
            handleClick(isLoggedIn ? '/archiving-list' : '/login', '커리어 아카이빙 하러 가기')
          }
        >
          커리어 아카이빙 하러 가기
        </Button>
      </Flex>
    </Flex>
  );
};

export default HomeSubSection;
