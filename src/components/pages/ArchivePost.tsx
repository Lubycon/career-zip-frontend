import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useModal from 'hooks/useModal';
import SelectProjectModalContent from 'components/organisms/SelectProjectModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import CloseButton from 'components/atoms/CloseButton';
import ArchivePostTemplate from 'components/templates/ArchivePostTemplate';
import { IProject } from 'types';
import CompleteArchivingModalContent from 'components/organisms/CompleteArchivingModalContent';

const ArchivePost = () => {
  const history = useHistory();
  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const { handleOpenModal, renderModal, handleCloseModal } = useModal({});

  useEffect(() => {
    if (isCompleted) {
      handleOpenModal();
    }
  }, [isCompleted]);

  useEffect(() => {
    if (selectedProjects.length === 0) handleOpenModal();
  }, [selectedProjects]);

  const handleClickCloseButton = () => {
    handleCloseModal();
    history.push('/archiving-list');
  };

  const handleClickNextButton = (projects: IProject[]) => {
    setSelectedProjects(projects);
    handleCloseModal();
  };

  const handleSubmitCallback = () => {
    setIsCompleted(true);
  };

  return (
    <>
      {isCompleted
        ? renderModal(
            <CompleteArchivingModalContent onClickHomeButton={handleClickCloseButton} />,
            <CloseButton onClick={handleClickCloseButton} />
          )
        : renderModal(
            <SelectProjectModalContent onClickNextButton={handleClickNextButton} />,
            <CloseButton onClick={handleClickCloseButton} />
          )}
      <MainTemplate>
        {selectedProjects.length !== 0 && !isCompleted && (
          <ArchivePostTemplate
            selectedProjects={selectedProjects}
            onSubmitCallback={handleSubmitCallback}
          />
        )}
      </MainTemplate>
    </>
  );
};

export default ArchivePost;
