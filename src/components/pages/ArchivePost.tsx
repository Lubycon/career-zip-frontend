import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useModal from 'hooks/useModal';
import SelectProjectModalContent from 'components/organisms/SelectProjectModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import CloseButton from 'components/atoms/CloseButton';
import ArchivePostTemplate from 'components/templates/ArchivePostTemplate';
import { IProject } from 'types';

const ArchivePost = () => {
  const history = useHistory();
  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);
  const { handleOpenModal, renderModal, handleCloseModal } = useModal({});

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

  return (
    <>
      {renderModal(
        <SelectProjectModalContent onClickNextButton={handleClickNextButton} />,
        <CloseButton onClick={handleClickCloseButton} />
      )}
      <MainTemplate>
        {selectedProjects.length !== 0 && (
          <ArchivePostTemplate selectedProjects={selectedProjects} />
        )}
      </MainTemplate>
    </>
  );
};

export default ArchivePost;
