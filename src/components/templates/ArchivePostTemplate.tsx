import React, { useEffect, useState } from 'react';
import { getQuestionPaper, postArchive } from 'api/archive';
import { Box, Flex, Text } from 'rebass';
import { IProject, IQuestion, IQuestionPaper } from 'types';
import client from 'api/client';
import ArchivePeriod from 'components/atoms/ArchivePeriod';
import { DARK_GRAY, GRAY } from 'styles/colors';
import ProjectsBlock from 'components/molecules/ProjectsBlock';
import QuestionBlock from 'components/molecules/QuestionBlock';
import Button from 'components/atoms/Button';
import { useHistory } from 'react-router';
import { useToast } from 'context/Toast';

interface ArchivePostFormProps {
  selectedProjects: IProject[];
}

interface QuestionBlocksProps {
  questionId: number;
  questions: IQuestion[];
  selectedProjects: IProject[];
}

interface IAnswer {
  questionId: number;
  projectId: number;
  comment: string;
}

const Form = ({ questionId, questions, selectedProjects }: QuestionBlocksProps) => {
  const history = useHistory();
  const { showToast } = useToast();
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handleChangeTextArea = (projectId: number, comment: string) => {
    setAnswers([
      ...answers.filter((answer) => answer.projectId !== projectId),
      { questionId, projectId, comment },
    ]);
  };

  const handleSubmit = async () => {
    try {
      const {
        data: { data: archiveId },
      } = await postArchive({ questionPaperId: questionId, answers });

      history.push(`/archive/${archiveId}`);
    } catch (err) {
      showToast({
        duration: 4000,
        message: (
          <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
            문제가 발생하였습니다. 다시 시도해주세요😥
          </Text>
        ),
      });
    }
  };

  return (
    <>
      {questions.map((question) => (
        <QuestionBlock
          key={question.id}
          data={question}
          selectedProjects={selectedProjects}
          onChangeTextArea={handleChangeTextArea}
        />
      ))}
      <Flex flexDirection="column" margin="130px 0 147px 0" alignItems="center">
        <Text color={GRAY[2]} margin="0 0 18px 0">
          이번 한 주도 고생많으셨어요! 다음주에 또 만나요 👋
        </Text>
        <Button width="240px" height="44px" onClick={handleSubmit}>
          저장
        </Button>
      </Flex>
    </>
  );
};

const ArchivePostTemplate = ({ selectedProjects }: ArchivePostFormProps) => {
  const [formData, setFormData] = useState<IQuestionPaper>();

  useEffect(() => {
    const getQuestionPaperAsync = async () => {
      const {
        data: { data },
      } = await getQuestionPaper();
      setFormData(data);
    };
    getQuestionPaperAsync();
  }, []);

  if (!formData) return null;
  const { id, startDate, endDate, questions } = formData;
  return (
    <Box>
      <ArchivePeriod>{`${startDate} ~ ${endDate}`}</ArchivePeriod>
      <Text fontSize="14px" color={GRAY[2]} margin="10px 0 0 0">
        커리어집은 일주일을 주기로 작성할 수 있어요. 이번 주를 떠올리며 아카이빙을 해볼까요? 자세히
        적는 것 보단 꾸준히 적는 게 중요해요! 💪
      </Text>
      <ProjectsBlock
        title="작성중인 프로젝트"
        description="선택된 프로젝트를 변경하시려면 뒤로 가기를 클릭해 프로젝트 설정 팝업에서 재선택해주세요."
        projectList={selectedProjects}
      />
      <Form questionId={id} questions={questions} selectedProjects={selectedProjects} />
    </Box>
  );
};

export default ArchivePostTemplate;
