import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { IProject } from 'types';
import { useToast } from 'context/Toast';
import CheckBox from 'components/atoms/CheckBox';
import { addProject, getProjectList } from 'api/project';
import { BLUE, DARK_GRAY, GRAY, LIGHT_GRAY } from 'styles/colors';

const ProjectButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${GRAY[4]};
  border-radius: 10px;
  color: ${GRAY[2]};
  font-size: 16px;
  line-height: 28.8px;
  padding: 19px 40px;
  border: 1px solid transparent;
  text-align: left;

  &.selected {
    color: ${BLUE[1]};
    border: 1px solid ${BLUE[1]};
    background-color: white;
  }

  margin-bottom: 10px;
`;

const AddProjectButton = styled.button`
  background-color: ${GRAY[4]};
  border-radius: 10px;
  color: ${BLUE[1]};
  font-size: 18px;
  line-height: 28.8px;
  padding: 19px 40px;
  text-align: left;

  &.simple {
    font-size: 14px;
    background-color: transparent;
    padding: 0 40px;
  }
`;

const AddProjectInput = styled.input`
  width: 100%;
  background-color: ${GRAY[4]};
  border-radius: 10px;
  color: ${DARK_GRAY[2]};
  font-size: 16px;
  line-height: 28.8px;
  padding: 19px 40px;
  border: none;
  text-align: left;
  outline: none;

  ::placeholder {
    color: ${GRAY[3]};
  }
`;

const NextButton = styled.button`
  border-radius: 10px;
  width: 180px;
  height: 40px;
  background-color: ${BLUE[1]};
  margin-left: auto;
  font-size: 18px;
  color: white;

  :disabled {
    background-color: ${GRAY[4]};
    color: ${LIGHT_GRAY[2]};
  }
`;

interface SelectProjectModalContentProps {
  onClickNextButton: (projectList: IProject[]) => void;
}

const SelectProjectModalContent = ({ onClickNextButton }: SelectProjectModalContentProps) => {
  const inputEl = useRef<HTMLInputElement>();
  const bottomOfList = useRef<HTMLDivElement>();
  const { showToast } = useToast();
  const [isAddProjectInputActive, setIsAddProjectInputActive] = useState(false);
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjectListAsync = async () => {
      try {
        const {
          data: { data },
        } = await getProjectList();
        if (data.length > 0) {
          setProjectList(data);
          setSelectedProjects(data);
        } else {
          setIsAddProjectInputActive(true);
        }
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

    getProjectListAsync();
  }, []);

  const projectListScrollToBottom = () => {
    bottomOfList.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    projectListScrollToBottom();
  }, [projectList, isAddProjectInputActive]);

  const addProjectAsync = async (title: string) => {
    try {
      const {
        data: { data },
      } = await addProject(title);
      setProjectList([...projectList, { id: data, title }]);
      setSelectedProjects([...selectedProjects, { id: data, title }]);
      setIsAddProjectInputActive(false);
      projectListScrollToBottom();
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

  const handleClickCheckBox = () => {
    if (projectList.length === selectedProjects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(projectList);
    }
  };

  const handleClickAddProject = () => {
    setIsAddProjectInputActive(true);
    projectListScrollToBottom();
  };

  const handleClickProject = (project: IProject) => {
    if (!selectedProjects.map(({ id }) => id).includes(project.id)) {
      setSelectedProjects([...selectedProjects, project]);
      return;
    }
    setSelectedProjects(selectedProjects.filter(({ id }) => id !== project.id));
  };

  const handleKeyDownInput = (e: React.KeyboardEvent) => {
    const projectTitle = inputEl.current.value;

    if (e.code === 'Enter' && projectTitle.trim()) {
      setIsAddProjectInputActive(false);
      addProjectAsync(projectTitle);
    }
  };

  const handleBlurInput = () => {
    const projectTitle = inputEl.current.value;
    if (projectTitle.trim() === '') {
      setIsAddProjectInputActive(false);
      return;
    }
    addProjectAsync(projectTitle);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection="column"
        padding="30px 130px 0 130px"
        textAlign="center"
        minHeight="455px"
      >
        <Text fontWeight="bold" fontSize="20px" lineHeight="32px">
          프로젝트 설정
        </Text>
        <Text marginTop="10px" fontSize="16px" color={GRAY[2]} lineHeight="22.4px">
          {projectList.length === 0 ? (
            <>
              커리어집의 아카이빙은 프로젝트 단위로 이뤄져요. <br />
              아직 생성된 프로젝트가 없다면, 프로젝트를 추가해주세요!
            </>
          ) : (
            <>
              이번주 아카이빙 하실 프로젝트를 선택한 뒤, <br /> 커리어집과 함께 기록을 시작
              해볼까요?
            </>
          )}
        </Text>
        <CheckBox
          margin="0 0 0 auto"
          name="전체 선택"
          checked={selectedProjects.length !== 0 && selectedProjects.length === projectList.length}
          onClick={handleClickCheckBox}
        />
        <Flex flexDirection="column" margin="14px 0 10px 0" maxHeight="312px" overflowY="auto">
          {projectList?.map((project) => (
            <ProjectButton
              key={project.id}
              className={selectedProjects.map(({ id }) => id).includes(project.id) && 'selected'}
              onClick={() => handleClickProject(project)}
            >
              {project.title}
            </ProjectButton>
          ))}
          {isAddProjectInputActive && (
            <AddProjectInput
              ref={inputEl}
              autoFocus
              placeholder="프로젝트의 이름을 공백 포함 30자 이내로 입력해주세요."
              onKeyDown={handleKeyDownInput}
              onBlur={handleBlurInput}
            />
          )}
          <div ref={bottomOfList} />
        </Flex>
        <AddProjectButton
          className={projectList.length >= 4 && 'simple'}
          onClick={handleClickAddProject}
        >
          + 프로젝트 추가하기
        </AddProjectButton>
      </Flex>
      <NextButton
        disabled={selectedProjects.length === 0}
        onClick={() => onClickNextButton(selectedProjects)}
      >
        다음
      </NextButton>
    </Flex>
  );
};

export default SelectProjectModalContent;
