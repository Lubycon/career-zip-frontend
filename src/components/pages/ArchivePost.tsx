import React, { useEffect, useState } from 'react';
import SelectProjectModalContent from 'components/organisms/SelectProjectModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import useModal from 'hooks/useModal';
import CloseButton from 'components/atoms/CloseButton';
import { useHistory } from 'react-router';

const ArchivePost = () => {
  const history = useHistory();
  const [selectedProjectIds, setSelectedProjectIds] = useState([]);
  const { handleOpenModal, renderModal, handleCloseModal } = useModal({});

  useEffect(() => {
    if (selectedProjectIds.length === 0) handleOpenModal();
  }, [selectedProjectIds]);

  const handleClickCloseButton = () => {
    handleCloseModal();
    history.push('/archiving-list');
  };

  const handleClickNextButton = (projectIds: number[]) => {
    setSelectedProjectIds(projectIds);
    handleCloseModal();
  };

  return (
    <>
      {renderModal(
        <SelectProjectModalContent onClickNextButton={handleClickNextButton} />,
        <CloseButton onClick={handleClickCloseButton} />
      )}
      <MainTemplate>
        <div>포스팅하기</div>
      </MainTemplate>
    </>
  );
};

export default ArchivePost;
