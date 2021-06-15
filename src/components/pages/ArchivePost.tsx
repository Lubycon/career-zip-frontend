import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useModal from 'hooks/useModal';
import SelectProjectModalContent from 'components/organisms/SelectProjectModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import CloseButton from 'components/atoms/CloseButton';
import ArchivePostTemplate from 'components/templates/ArchivePostTemplate';
import CompleteArchivingModalContent from 'components/organisms/CompleteArchivingModalContent';
import useHasArchived from 'hooks/useHasArchived';
import HasArchivedModalContent from 'components/organisms/HasArchivedModalContent';
import { IProject } from 'types';

const ArchivePost = () => {
  const history = useHistory();
  const { hasArchived } = useHasArchived();
  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const { handleOpenModal, renderModal, handleCloseModal } = useModal({});

  useEffect(() => {
    if (hasArchived == null) return;
    if (isCompleted || hasArchived || selectedProjects.length === 0) {
      handleOpenModal();
    }
  }, [isCompleted, hasArchived, selectedProjects]);

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
      {renderModal(
        hasArchived ? (
          <HasArchivedModalContent />
        ) : isCompleted ? (
          <CompleteArchivingModalContent onClickHomeButton={handleClickCloseButton} />
        ) : (
          <SelectProjectModalContent onClickNextButton={handleClickNextButton} />
        ),
        <CloseButton onClick={handleClickCloseButton} />
      )}
      <MainTemplate>
        {!hasArchived && !isCompleted && selectedProjects.length !== 0 && (
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
