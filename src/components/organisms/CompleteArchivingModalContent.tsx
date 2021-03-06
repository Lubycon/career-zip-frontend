import { Flex, Text } from 'rebass';
import Button from 'components/atoms/Button';
import { GRAY } from 'styles/colors';

interface CompleteArchivingModalContentProps {
  isFirstArchive: boolean;
}

const CompleteArchivingModalContent = ({ isFirstArchive }: CompleteArchivingModalContentProps) => {
  const handleClick = () => {
    window.open('https://forms.gle/sUpjYuEaYWqdT3g98', '_blank');
  };

  return (
    <Flex flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
      <Text fontSize="72px" fontWeight="bold" marginTop="123px">
        {isFirstArchive ? '๐' : 'โ๏ธ'}
      </Text>
      <Text fontSize="32px" fontWeight="bold" color={GRAY[1]} marginTop="11px" lineHeight="1.4">
        {isFirstArchive ? '์ฒซ ์ปค๋ฆฌ์ด ์์นด์ด๋น ์๋ฃ!' : '์ปค๋ฆฌ์ด ์์นด์ด๋น ์๋ฃ!'}
      </Text>
      <Text fontSize="18px" color={GRAY[2]} marginTop="13px" lineHeight="1.6">
        {isFirstArchive
          ? '์ด๋ฒ ์ฃผ ์์นด์ด๋น์ ์ ๋ง์น์จ๊ตฐ์.'
          : '์ด๋ฒ ์ฃผ๋ ์์นด์ด๋น์ ์ ๋ง์น์จ๋ค์!'}
        <br />
        ๊ธฐ๋กํ๋ ๋งํผ ๋๋์ฑ ์ฑ์ฅํ์ค ๊ฑฐ์์. ๋ค์ ์ฃผ์๋ ๋ ๋ง๋์!
      </Text>
      <Button width="260px" height="44px" margin="92px 0 0 0" fontSize="18px" onClick={handleClick}>
        ์ปค๋ฆฌ์ด์ง์๊ฒ ํผ๋๋ฐฑ ๋จ๊ธฐ๊ธฐ
      </Button>
      <Text fontSize="14px" color={GRAY[2]} lineHeight="1.4" marginTop="14px">
        ๊ฐ์๊ธฐ ์ ์ ์ด๋ฒ์ฃผ ์ปค๋ฆฌ์ด์ง์ ๋ํ ํผ๋๋ฐฑ์ ๋จ๊ฒจ์ฃผ์ธ์.
      </Text>
    </Flex>
  );
};

export default CompleteArchivingModalContent;
