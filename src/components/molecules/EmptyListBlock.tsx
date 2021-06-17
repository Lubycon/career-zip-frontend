import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';

const Wrapper = styled.div`
  display: flex;
  padding: 32px 66px;
  border-radius: 10px;
  background-color: ${GRAY[4]};
`;

const EmptyListBlock = () => {
  return (
    <Wrapper>
      <Text fontSize="18px" lineHeight="28.8px" marginRight="4px">
        📌
      </Text>
      <Flex flexDirection="column">
        <Text fontSize="18px" color={GRAY[2]} fontWeight="bold" lineHeight="28.8px">
          아직 커리어 아카이빙을 하지 않으셨군요! [커리어 아카이빙 하기] 버튼을 누르시고, 프로젝트를
          중간 저장해보세요!
        </Text>
        <Text fontSize="14px" color={GRAY[2]} lineHeight="19.6px" marginTop="8px">
          커리어집에서는 <b>일주일에 한 번씩 지난 주 커리어 아카이빙</b>을 하실 수 있어요! 길고
          자세하게 쓰려고 하기보다는 10분이라도 꾸준히 작성하는 게 중요해요.
        </Text>
      </Flex>
    </Wrapper>
  );
};

export default EmptyListBlock;
