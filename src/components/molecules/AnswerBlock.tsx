import styled from '@emotion/styled';
import Badge from 'components/atoms/Badge';
import React from 'react';
import { GRAY } from 'styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
  border: 1px solid ${GRAY[3]};
  border-radius: 10px;

  :not(:first-of-type) {
    margin-top: 40px;
  }
`;

interface AnswerBlockProps {
  projectTitle: string;
  children: React.ReactNode;
}

const AnswerBlock = ({ projectTitle, children }: AnswerBlockProps) => {
  return (
    <Wrapper>
      <Badge>{`# ${projectTitle}`}</Badge>
      {children}
    </Wrapper>
  );
};

export default AnswerBlock;
