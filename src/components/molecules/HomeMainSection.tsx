import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Text } from 'rebass';

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

  > a {
    ${mainLoginButton}
  }
`;

const HomeMainSection = () => {
  return (
    <Background>
      <Content>
        <Text fontSize="52px" fontWeight="600" lineHeight="72.8px">
          커리어 세이브 포인트
        </Text>
        <Text fontSize="46px" fontWeight="600" lineHeight="64.4px">
          Career.zip
        </Text>
        <Link to="/login">사전 신청 바로하기</Link>
      </Content>
    </Background>
  );
};

export default HomeMainSection;
