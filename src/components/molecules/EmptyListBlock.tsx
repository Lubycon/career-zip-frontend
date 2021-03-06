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
        ๐
      </Text>
      <Flex flexDirection="column">
        <Text fontSize="18px" color={GRAY[2]} fontWeight="bold" lineHeight="28.8px">
          ์์ง ์ปค๋ฆฌ์ด ์์นด์ด๋น์ ํ์ง ์์ผ์จ๊ตฐ์! [์ปค๋ฆฌ์ด ์์นด์ด๋น ํ๊ธฐ] ๋ฒํผ์ ๋๋ฅด์๊ณ , ํ๋ก์ ํธ๋ฅผ
          ์ค๊ฐ ์ ์ฅํด๋ณด์ธ์!
        </Text>
        <Text fontSize="14px" color={GRAY[2]} lineHeight="19.6px" marginTop="8px">
          ์ปค๋ฆฌ์ด์ง์์๋ <b>์ผ์ฃผ์ผ์ ํ ๋ฒ์ฉ ์ง๋ ์ฃผ ์ปค๋ฆฌ์ด ์์นด์ด๋น</b>์ ํ์ค ์ ์์ด์! ๊ธธ๊ณ 
          ์์ธํ๊ฒ ์ฐ๋ ค๊ณ  ํ๊ธฐ๋ณด๋ค๋ 10๋ถ์ด๋ผ๋ ๊พธ์คํ ์์ฑํ๋ ๊ฒ ์ค์ํด์.
        </Text>
      </Flex>
    </Wrapper>
  );
};

export default EmptyListBlock;
