import { useHistory } from 'react-router';
import { Flex, Text } from 'rebass';
import Button from 'components/atoms/Button';
import useHasArchived from 'hooks/useHasArchived';
import { GRAY } from 'styles/colors';

const HasArchivedModalContent = () => {
  const history = useHistory();
  const { thisWeekArchiveId } = useHasArchived();

  const handleClick = () => {
    history.push(`/archive/${thisWeekArchiveId}`);
  };

  return (
    <Flex flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
      <Text fontSize="72px" fontWeight="bold" marginTop="123px">
        👋
      </Text>
      <Text fontSize="32px" fontWeight="bold" color={GRAY[1]} marginTop="11px">
        앗 이미 이번주엔 아카이빙을 하셨어요!
      </Text>
      <Text fontSize="18px" color={GRAY[2]} marginTop="13px" lineHeight="28.8px">
        커리어 아카이빙은 일주일을 주기로 한번씩 하는게 가장 효과가 좋아요! <br />
        다음주에 다시 커리어집에서 만나요!
      </Text>
      <Button
        width="264px"
        height="40px"
        margin="127px 0 0 0"
        fontSize="18px"
        onClick={handleClick}
      >
        이번주 아카이빙 기록보기
      </Button>
    </Flex>
  );
};

export default HasArchivedModalContent;
