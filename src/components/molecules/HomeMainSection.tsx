import styled from '@emotion/styled';
import { logger } from '@lubycon/utils';
import { useHistory } from 'react-router-dom';
import { Text } from 'rebass';
import useLoginStatus from 'hooks/useLoginStatus';

import { BLUE } from 'styles/colors';
import { mainLoginButton } from 'styles/link';

const Background = styled.div`
  display: flex;
  height: 700px;
  background-color: ${BLUE[4]};
  background-image: url('/public/images/landing_img.svg');
  background-position: center;
`;

const Content = styled.div`
  width: 1440px;
  margin: auto;
  color: #fff;
  margin-top: 325px;
`;

const Button = styled.button`
  ${mainLoginButton}
`;

const landingPageLogger = logger.getPageLogger('landing_page');

const HomeMainSection = () => {
  const history = useHistory();
  const { isLoggedIn } = useLoginStatus();

  const handleClick = (path: string, title: string) => {
    landingPageLogger.click('click_main_section_button', {
      path,
      title,
    });
    history.push(path);
  };

  return (
    <Background>
      <Content>
        <Text fontSize="52px" fontWeight="600" lineHeight="72.8px">
          커리어 세이브 포인트
        </Text>
        <Text fontSize="46px" fontWeight="600" lineHeight="64.4px">
          Career.zip
        </Text>
        {isLoggedIn ? (
          <Button onClick={() => handleClick('/archiving-list', '커리어 아카이빙 페이지로')}>
            커리어 아카이빙 페이지로
          </Button>
        ) : (
          <Button onClick={() => handleClick('/login', '커리어집에서 커리어 아카이빙')}>
            커리어집에서 커리어 아카이빙
          </Button>
        )}
      </Content>
    </Background>
  );
};

export default HomeMainSection;
