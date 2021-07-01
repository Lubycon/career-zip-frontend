import { useEffect } from 'react';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';

const MobileDeviceModalContent = () => {
  useEffect(() => {
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.touchAction = 'auto';
    };
  }, []);
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="20px 0 35px 0"
    >
      <Text fontSize="16px" fontWeight="bold" color={GRAY[1]}>
        앗! 모바일로 접속하셨군요?
      </Text>
      <Text fontSize="14px" color={GRAY[2]} marginTop="20px" lineHeight="1.4" textAlign="center">
        커리어집은 아직 모바일 버전이 없어요 😥
        <br />
        원활한 사용을 위해
        <br />
        PC 환경에서 접속해주세요!
      </Text>
    </Flex>
  );
};

export default MobileDeviceModalContent;
