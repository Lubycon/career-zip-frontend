import { useEffect, useState } from 'react';
import { Flex, Text } from 'rebass';
import { useHistory } from 'react-router';
import { logger } from '@lubycon/utils';
import { useToast } from 'context/Toast';
import { IArchive, IQuestion } from 'types';
import ArchivePeriod from 'components/atoms/ArchivePeriod';
import ProjectsBlock from 'components/molecules/ProjectsBlock';
import Button from 'components/atoms/Button';
import AnswerBlock from 'components/molecules/AnswerBlock';
import { getArchive } from 'api/archive';
import { DARK_GRAY, GRAY } from 'styles/colors';

interface ArchiveTemplateProps {
  archiveId: number;
}

interface QuestionBlockProps {
  question: IQuestion;
}

const archivePageLogger = logger.getPageLogger('archive_page');

const QuestionBlock = ({ question }: QuestionBlockProps) => {
  if (!question) return null;

  const { description, priority, answers } = question;
  return (
    <Flex flexDirection="column" margin="70px 0 0 0">
      <Text
        fontSize="18px"
        fontWeight="bold"
        lineHeight="28.8px"
      >{`${priority}. ${description}`}</Text>
      <Flex flexDirection="column" margin="20px 0 0 0">
        {answers.map(({ project, id, comment }) => (
          <AnswerBlock key={id} projectTitle={project.title}>
            <Flex flexDirection="column" margin="16px 28px">
              <Text fontSize="14px" color={GRAY[1]}>
                {comment}
              </Text>
            </Flex>
          </AnswerBlock>
        ))}
      </Flex>
    </Flex>
  );
};

const ArchiveTemplate = ({ archiveId }: ArchiveTemplateProps) => {
  const history = useHistory();
  const { showToast } = useToast();
  const [archive, setArchive] = useState<IArchive>();

  useEffect(() => {
    const getArchiveAsync = async (id: number) => {
      try {
        const {
          data: { data },
        } = await getArchive(id);
        setArchive(data);
      } catch (err) {
        showToast({
          duration: 3000,
          message: (
            <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
              문제가 발생하였습니다. 다시 시도해주세요😥
            </Text>
          ),
        });
      }
    };
    getArchiveAsync(archiveId);
  }, [archiveId]);

  const handleClickGoBack = () => {
    archivePageLogger.click('click_go_back_button');
    history.push('/archiving-list');
  };

  const handleClickEdit = () => {
    archivePageLogger.click('click_edit_button');
    showToast({
      duration: 3000,
      message: (
        <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
          아카이빙한 것을 수정하거나 삭제할 수 없어요!😥 빠른시일내에 해당 기능을 추가 할게요!
        </Text>
      ),
    });
  };

  if (!archive) return null;
  const { startDate, endDate, questions, selectedProjects } = archive;

  return (
    <Flex flexDirection="column">
      <ArchivePeriod>{`${startDate} ~ ${endDate}`}</ArchivePeriod>
      <ProjectsBlock title="작성한 프로젝트" projectList={selectedProjects} />
      {questions.map((question) => (
        <QuestionBlock key={question.id} question={question} />
      ))}
      <Flex marginTop="196px" justifyContent="center">
        <Button width="240px" height="44px" fontSize="18px" onClick={handleClickGoBack}>
          뒤로가기
        </Button>
        <Button
          width="240px"
          height="44px"
          margin="0 0 0 30px"
          fontSize="18px"
          backgroundColor={GRAY[3]}
          onClick={handleClickEdit}
        >
          수정
        </Button>
      </Flex>
    </Flex>
  );
};

export default ArchiveTemplate;
