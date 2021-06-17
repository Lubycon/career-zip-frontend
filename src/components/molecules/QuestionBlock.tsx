import React from 'react';
import { Flex, Text } from 'rebass';
import { GRAY } from 'styles/colors';
import { IProject, IQuestion } from 'types';
import { debounce } from 'lodash';
import AnswerBlock from 'components/molecules/AnswerBlock';
import TextArea from 'components/atoms/TextArea';

interface ArchiveAnswerBlockProps {
  question: IQuestion;
  selectedProjects: IProject[];
  onChangeTextArea: (questionId: number, projectId: number, value: string) => void;
}

interface AnswerBlockWrapperProps {
  questionId: number;
  project: IProject;
  example: string;
  onChange: (questionId: number, projectId: number, value: string) => void;
}

const AnswerBlockWrapper = ({
  questionId,
  project,
  example,
  onChange,
}: AnswerBlockWrapperProps) => {
  const debounced = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(questionId, project.id, e.target.value);
    },
    100,
    { leading: false, trailing: true }
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    debounced(e);
  };

  return (
    <AnswerBlock projectTitle={project.title}>
      <>
        <Flex flexDirection="column" margin="16px 28px">
          <Text fontSize="16px" fontWeight="bold" color={GRAY[1]}>
            이번주의 커리어 아카이빙
          </Text>
          <TextArea
            placeholder={example}
            name="text"
            maxLength={1000}
            onChange={(e) => handleChange(e)}
          />
        </Flex>
      </>
    </AnswerBlock>
  );
};

const QuestionBlock = ({
  question,
  selectedProjects,
  onChangeTextArea,
}: ArchiveAnswerBlockProps) => {
  if (!question) return null;

  const { description, priority, example } = question;
  return (
    <Flex flexDirection="column" margin="70px 0 0 0">
      <Text
        fontSize="18px"
        fontWeight="bold"
        lineHeight="28.8px"
      >{`${priority}. ${description}`}</Text>
      <Flex flexDirection="column" margin="20px 0 0 0">
        {selectedProjects.map((project) => (
          <AnswerBlockWrapper
            key={project.id}
            questionId={question.id}
            example={example}
            project={project}
            onChange={onChangeTextArea}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default QuestionBlock;
