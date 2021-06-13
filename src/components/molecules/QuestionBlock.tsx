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
  onChange: (questionId: number, projectId: number, value: string) => void;
}

const AnswerBlockWrapper = ({ questionId, project, onChange }: AnswerBlockWrapperProps) => {
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
    <AnswerBlock projectTitle={project.title}>
      <>
        <Flex flexDirection="column" margin="16px 28px">
          <Text fontSize="16px" fontWeight="bold" color={GRAY[1]}>
            이번주의 커리어 아카이빙
          </Text>
          <TextArea
            placeholder="이곳에 프로젝트를 기록해보세요."
            name="text"
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
          <AnswerBlockWrapper
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
