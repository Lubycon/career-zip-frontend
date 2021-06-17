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
        🎉
      </Text>
      <Text fontSize="32px" fontWeight="bold" color={GRAY[1]} marginTop="11px" lineHeight="1.4">
        첫 커리어 아카이빙 완료!
      </Text>
      <Text fontSize="18px" color={GRAY[2]} marginTop="13px" lineHeight="1.6">
        이번 주 아카이빙을 잘 마치셨군요. <br />
        기록하는 만큼 더더욱 성장하실 거에요. 다음 주에도 또 만나요!
      </Text>
      <Button
        width="260px"
        height="44px"
        margin="92px 0 0 0"
        fontSize="18px"
        onClick={onClickHomeButton}
      >
        커리어집에게 피드백 남기기
      </Button>
      <Text fontSize="14px" color={GRAY[2]} lineHeight="1.4" marginTop="14px">
        가시기 전에 이번주 커리어집에 대한 피드백을 남겨주세요.
      </Text>
    </Flex>
  );
};

export default CompleteArchivingModalContent;
