import React, { useCallback, useEffect, useState } from 'react';
import { getPreviousAnswers, getQuestionPaper, postArchive } from 'api/archive';
import { Box, Flex, Text } from 'rebass';
import { useToast } from 'context/Toast';
import { IPreviousAnswers, IProject, IQuestion, IQuestionPaper } from 'types';
import ArchivePeriod from 'components/atoms/ArchivePeriod';
import ProjectsBlock from 'components/molecules/ProjectsBlock';
import QuestionBlock from 'components/molecules/QuestionBlock';
import Button from 'components/atoms/Button';
import { DARK_GRAY, GRAY } from 'styles/colors';
import { useSelector } from 'react-redux';
import { selectIsSideMenuCollapsed } from 'slices/common';

interface ArchivePostFormProps {
  selectedProjects: IProject[];
  onSubmitCallback: (T: any) => void;
}
interface FormBlockProps {
  questions: IQuestion[];
  selectedProjects: IProject[];
  isSubmitting: boolean;
  previousAnswers?: IPreviousAnswers[];
  onSubmit: (T: any) => void;
}

interface IAnswer {
  questionId: number;
  projectId: number;
  comment: string;
}

interface IAnswers {
  [key: string]: IAnswer;
}

const generateAnswersModel = (questionIds: number[], selectedProjectIds: number[]): IAnswers => {
  const obj: IAnswers = {};
  questionIds.forEach((q) => {
    selectedProjectIds.forEach((p) => {
      const key = `${q}-${p}`;
      obj[key] = {
        questionId: q,
        projectId: p,
        comment: '',
      };
    });
  });
  return obj;
};

const Form = ({
  questions,
  selectedProjects,
  previousAnswers,
  onSubmit,
  isSubmitting,
}: FormBlockProps) => {
  const { showToast } = useToast();
  const [answers, setAnswers] = useState<IAnswers>(
    generateAnswersModel(
      questions.map((q) => q.id),
      selectedProjects.map((p) => p.id)
    )
  );

  const handleChangeTextArea = (questionId: number, projectId: number, comment: string) => {
    setAnswers({
      ...answers,
      [`${questionId}-${projectId}`]: { questionId, projectId, comment },
    });
  };

  const handleSubmit = () => {
    const hasEmptyComment = Object.values(answers)
      .map((answer) => answer.comment)
      .includes('');

    if (hasEmptyComment) {
      showToast({
        duration: 3000,
        message: (
          <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
            📌 응답하지 않은 항목이 있어요!
          </Text>
        ),
      });
    } else {
      onSubmit(Object.values(answers));
    }
  };
  return (
    <>
      {questions.map((question) => {
        const previousAnswersByQuestion = previousAnswers?.find((q) => q.id === question.id)
          ?.answers;
        return (
          <QuestionBlock
            key={question.id}
            question={question}
            selectedProjects={selectedProjects}
            previousAnswers={previousAnswersByQuestion}
            onChangeTextArea={handleChangeTextArea}
          />
        );
      })}
      <Flex flexDirection="column" margin="130px 0 0 0" alignItems="center">
        <Text color={GRAY[2]} margin="0 0 18px 0">
          이번 한 주도 고생많으셨어요! 다음주에 또 만나요 👋
        </Text>
        <Button
          width="240px"
          height="44px"
          fontSize="18px"
          className={isSubmitting ? 'is-submitting' : undefined}
          onClick={isSubmitting ? undefined : handleSubmit}
        >
          저장
        </Button>
      </Flex>
    </>
  );
};

const ArchivePostTemplate = ({ selectedProjects, onSubmitCallback }: ArchivePostFormProps) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<IQuestionPaper>();
  const [previousAnswers, setPreviousAnswers] = useState<IPreviousAnswers[]>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSideMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  useEffect(() => {
    const getQuestionPaperAsync = async () => {
      const {
        data: { data: questionData },
      } = await getQuestionPaper();
      const questionPaperId = questionData.id;
      const projectIds = selectedProjects.map((p) => p.id);
      const {
        data: { data: answersData },
      } = await getPreviousAnswers({ questionPaperId, projectIds });
      setFormData(questionData);
      setPreviousAnswers(answersData);
    };
    getQuestionPaperAsync();
  }, [selectedProjects]);

  const handleSubmit = useCallback(
    async (answers: IAnswer[]) => {
      try {
        setIsSubmitting(true);
        const {
          data: { data },
        } = await postArchive({ questionPaperId: formData.id, answers });
        onSubmitCallback(data.firstArchive);
        setIsSubmitting(false);
      } catch (err) {
        setIsSubmitting(false);
        showToast({
          duration: 4000,
          message: (
            <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
              문제가 발생하였습니다. 다시 시도해주세요😥
            </Text>
          ),
        });
      }
    },
    [formData]
  );

  if (!formData) return null;
  const { startDate, endDate, questions } = formData;

  return (
    <Box>
      <ArchivePeriod>{`${startDate} ~ ${endDate}`}</ArchivePeriod>
      <Text fontSize="14px" color={GRAY[2]} margin="10px 0 0 0" lineHeight="1.6">
        {isSideMenuCollapsed ? (
          '커리어집은 일주일을 주기로 작성할 수 있어요. 이번 주를 떠올리며 아카이빙을 해볼까요? 자세히 적는 것 보단 꾸준히 적는 게 중요해요! 💪'
        ) : (
          <>
            커리어집은 일주일을 주기로 작성할 수 있어요. 이번 주를 떠올리며 아카이빙을 해볼까요?
            <br />
            자세히 적는 것 보단 꾸준히 적는 게 중요해요! 💪
          </>
        )}
      </Text>
      <ProjectsBlock
        title="작성중인 프로젝트"
        description="선택된 프로젝트를 변경하시려면 뒤로 가기를 클릭해 프로젝트 설정 팝업에서 재선택해주세요."
        projectList={selectedProjects}
      />
      <Form
        questions={questions}
        selectedProjects={selectedProjects}
        previousAnswers={previousAnswers}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default ArchivePostTemplate;
