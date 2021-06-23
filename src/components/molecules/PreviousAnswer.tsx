import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Image, Text } from 'rebass';
import { GRAY } from 'styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 20px 0;
  box-shadow: 0 0.5px ${GRAY[3]};

  > button {
    display: flex;
    margin-bottom: 6px;
    align-items: center;
  }
`;

interface PreviousAnswerProps {
  comment: string;
}

const PreviousAnswer = ({ comment }: PreviousAnswerProps) => {
  const [isFolded, setIsFolded] = useState(true);

  const handleClick = () => {
    setIsFolded(!isFolded);
  };

  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        <Text fontSize="14px" color={isFolded ? GRAY[3] : GRAY[2]} marginRight="10px">
          지난 번에 작성한 아카이빙 내용 확인하기
        </Text>
        {isFolded ? (
          <Image alt="up arrow" src="/public/icons/up_arrow.svg" />
        ) : (
          <Image alt="down arrow" src="/public/icons/down_arrow.svg" />
        )}
      </button>
      {!isFolded && (
        <Text margin="14px 0 16px 0" fontSize="14px" lineHeight="1.4" color={GRAY[2]}>
          {comment.split('\n').map((p, index) => (
            <React.Fragment key={`span-${index}`}>
              <span>{p}</span>
              <br />
            </React.Fragment>
          ))}
        </Text>
      )}
    </Wrapper>
  );
};

export default PreviousAnswer;
