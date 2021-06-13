import React from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';
import { IProject, IQuestion } from 'types';
import { debounce } from 'lodash';
import Badge from 'components/atoms/Badge';

const AnswerBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
  border: 1px solid ${GRAY[3]};
  border-radius: 10px;

  :not(:first-of-type) {
    margin-top: 40px;
  }
`;

const StyledTextArea = styled.textarea`
  margin-top: 5px;
  border: none;
  font-size: 14px;
  color: ${GRAY[1]};
  resize: none;
  outline: none;

  :placeholder {
    color: ${GRAY[3]};
  }
`;

interface ArchiveAnswerBlockProps {
  question: IQuestion;
  selectedProjects: IProject[];
  onChangeTextArea: (questionId: number, projectId: number, value: string) => void;
}

interface AnswerBlockProps {
  questionId: number;
  project: IProject;
  onChange: (questionId: number, projectId: number, value: string) => void;
}

const AnswerBlock = ({ questionId, project, onChange }: AnswerBlockProps) => {
  const debounced = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(questionId, project.id, e.target.value);
    },
    500,
    { leading: false, trailing: true }
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    debounced(e);
  };

  return (
    <AnswerBlockWrapper>
      <Badge>{`# ${project.title}`}</Badge>
      <Flex flexDirection="column" margin="16px 28px">
        <Text fontSize="16px" fontWeight="bold" color={GRAY[1]}>
          이번주의 커리어 아카이빙
        </Text>
        <StyledTextArea
          placeholder="이곳에 프로젝트를 기록해보세요."
          name="text"
          onChange={(e) => handleChange(e)}
        />
      </Flex>
    </AnswerBlockWrapper>
  );
};

const QuestionBlock = ({
  question,
  selectedProjects,
  onChangeTextArea,
}: ArchiveAnswerBlockProps) => {
  if (!question) return null;

  const { description, priority } = question;
  return (
    <Flex flexDirection="column" margin="70px 0 0 0">
      <Text
        fontSize="18px"
        fontWeight="bold"
        lineHeight="28.8px"
      >{`${priority}. ${description}`}</Text>
      <Flex flexDirection="column" margin="20px 0 0 0">
        {selectedProjects.map((project) => (
          <AnswerBlock
            key={project.id}
            questionId={question.id}
            project={project}
            onChange={onChangeTextArea}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default QuestionBlock;
