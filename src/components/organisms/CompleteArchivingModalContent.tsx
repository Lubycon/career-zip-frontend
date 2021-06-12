import { Flex, Text } from 'rebass';
import Button from 'components/atoms/Button';
import { GRAY } from 'styles/colors';

interface CompleteArchivingModalContentProp {
  onClickHomeButton: VoidFunction;
}

const CompleteArchivingModalContent = ({
  onClickHomeButton,
}: CompleteArchivingModalContentProp) => {
  return (
    <Flex flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
      <Text fontSize="72px" fontWeight="bold" marginTop="123px">
        👋
      </Text>
      <Text fontSize="32px" color={GRAY[1]} marginTop="11px">
        커리어 아카이빙 완료!
      </Text>
      <Text fontSize="18px" color={GRAY[2]} marginTop="13px" lineHeight="28.8px">
        이번 주 아카이빙을 잘 마치셨군요! <br />
        다음 주에 또 만나요!
      </Text>
      <Button width="180px" height="40px" margin="127px 0 0 0" onClick={onClickHomeButton}>
        홈으로
      </Button>
    </Flex>
  );
};

export default CompleteArchivingModalContent;
