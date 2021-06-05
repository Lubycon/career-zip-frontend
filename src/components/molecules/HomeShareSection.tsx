import React from 'react';
import styled from '@emotion/styled';
import useToast from 'hooks/useToast';
import { Flex, Text } from 'rebass';
import { BLUE, GRAY } from 'styles/colors';

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 570px;
  /* background-image: url('/public/images/section03_bg.svg'); */
  background-position: center;
`;

const ShareButton = styled.button`
  display: flex;
  width: 300px;
  border-radius: 5px;
  background-color: ${BLUE[1]};
  margin-top: 80px;
  padding: 20px 34px;
  box-shadow: 0px 0px 5px 0px #0056ff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const HomeShareSection = () => {
  const { handleShowToast, renderToast } = useToast();

  const handleClick = () => {
    handleShowToast();
  };

  return (
    <>
      {renderToast(<Text fontWeight="bold">🔗 공유 링크가 복사 되었습니다!</Text>)}
      <Background>
        <Flex flexDirection="column" padding="145px 0" margin="auto" alignItems="center">
          <Text fontSize="52px" fontWeight="bold" lineHeight="72.8px">
            주변 지인과 공유하고 함께 성장하세요!
          </Text>
          <Text
            fontSize="32px"
            fontWeight="600"
            color={GRAY[2]}
            lineHeight="44.8px"
            marginTop="20px"
          >
            현재 000명이 공유중
          </Text>
          <ShareButton onClick={handleClick}>함께 성장하기</ShareButton>
        </Flex>
      </Background>
    </>
  );
};

export default HomeShareSection;
