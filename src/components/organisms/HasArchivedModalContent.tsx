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
        ๐
      </Text>
      <Text fontSize="32px" fontWeight="bold" color={GRAY[1]} marginTop="11px">
        ์ ์ด๋ฏธ ์ด๋ฒ์ฃผ์ ์์นด์ด๋น์ ํ์จ์ด์!
      </Text>
      <Text fontSize="18px" color={GRAY[2]} marginTop="13px" lineHeight="28.8px">
        ์ปค๋ฆฌ์ด ์์นด์ด๋น์ ์ผ์ฃผ์ผ์ ์ฃผ๊ธฐ๋ก ํ๋ฒ์ฉ ํ๋๊ฒ ๊ฐ์ฅ ํจ๊ณผ๊ฐ ์ข์์! <br />
        ๋ค์์ฃผ์ ๋ค์ ์ปค๋ฆฌ์ด์ง์์ ๋ง๋์!
      </Text>
      <Button
        width="264px"
        height="40px"
        margin="127px 0 0 0"
        fontSize="18px"
        onClick={handleClick}
      >
        ์ด๋ฒ์ฃผ ์์นด์ด๋น ๊ธฐ๋ก๋ณด๊ธฐ
      </Button>
    </Flex>
  );
};

export default HasArchivedModalContent;
