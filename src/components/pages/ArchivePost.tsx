import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { logger } from '@lubycon/logger';
import useModal from 'hooks/useModal';
import CloseButton from 'components/atoms/CloseButton';
import SelectProjectModalContent from 'components/organisms/SelectProjectModalContent';
import CompleteArchivingModalContent from 'components/organisms/CompleteArchivingModalContent';
import HasArchivedModalContent from 'components/organisms/HasArchivedModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import ArchivePostTemplate from 'components/templates/ArchivePostTemplate';
import useHasArchived from 'hooks/useHasArchived';
import { IProject } from 'types';

const archivingPostPageLogger = logger.getPageLogger('archive_post_page');

const ArchivePost = () => {
  const history = useHistory();
  const { hasArchived } = useHasArchived();
  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFirstArchive, setIsFirstArchive] = useState(false);
  const { handleOpenModal, renderModal, handleCloseModal } = useModal({});

  useEffect(() => {
    archivingPostPageLogger.view();
  }, []);

  useEffect(() => {
    if (hasArchived == null) return;
    if (isCompleted || hasArchived || selectedProjects.length === 0) {
      handleOpenModal();
    }
  }, [isCompleted, selectedProjects, hasArchived]);

  const handleClickCloseButton = () => {
    handleCloseModal();
    history.push('/archiving-list');
  };

  const handleClickNextButton = (projects: IProject[]) => {
    setSelectedProjects(projects);
    handleCloseModal();
  };

  const handleSubmitCallback = (isFirst: boolean) => {
    setIsFirstArchive(isFirst);
    setIsCompleted(true);
  };

  return (
    <>
      {renderModal(
        hasArchived ? (
          <HasArchivedModalContent />
        ) : isCompleted ? (
          <CompleteArchivingModalContent isFirstArchive={isFirstArchive} />
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
