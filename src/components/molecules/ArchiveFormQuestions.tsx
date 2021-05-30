import React from 'react';
import { Flex, Text } from 'rebass';
import { SKY_BLUE } from 'styles/colors';
import { IQuestion } from 'types';

interface IAnswer {
  project: string;
  answer: string;
}

const Answer = ({ project, answer }: IAnswer) => {
  return (
    <Flex flexDirection="column" margin="0 0 10px 0" sx={{ ':last-of-type': 'margin-bottom: 0' }}>
      <Text fontSize="15px" backgroundColor={SKY_BLUE[1]} padding="10px">{`# ${project}`}</Text>
      <Text padding="10px">{answer}</Text>
    </Flex>
  );
};

const ArchiveFormQuestions = ({ questions }: { questions: IQuestion[] }) => {
  return (
    <>
      {questions.map((question: IQuestion) => {
        const { id, description, answers } = question;
        return (
          <Flex
            key={id}
            flexDirection="column"
            backgroundColor="#fff"
            padding="20px"
            margin="10px 0 0 0"
          >
            <Text fontSize="20px" fontWeight="bold" margin="0 0 20px 0">
              {description}
            </Text>
            {answers.map(({ id: answerId, project: { title }, comment }) => (
              <Answer key={answerId} project={title} answer={comment} />
            ))}
          </Flex>
        );
      })}
    </>
  );
};

export default ArchiveFormQuestions;
