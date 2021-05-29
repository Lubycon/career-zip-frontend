import React, { useEffect } from 'react';
import useModal from 'hooks/useModal';
import SelectJobModalContent from 'components/organisms/SelectJobModalContent';
import MainTemplate from 'components/templates/MainTemplate';
import { useSelector } from 'react-redux';
import { RootState } from 'slices';
import { getLocalStorageItem, setLocalStorageItem } from 'utils/localstorage';

const Main = () => {
  const job = useSelector((state: RootState) => state.account.job);
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({});

  useEffect(() => {
    const selectJobNextTime = getLocalStorageItem<boolean>('selectJobNextTime');
    if (selectJobNextTime || job) {
      handleCloseModal();
      return;
    }
    handleOpenModal();
  }, []);

  const handleClickSelectNextTimeButton = () => {
    setLocalStorageItem<boolean>('selectJobNextTime', true);
    handleCloseModal();
  };

  return (
    <>
      {renderModal(
        <SelectJobModalContent onClickSelectNextTimeButton={handleClickSelectNextTimeButton} />
      )}
      <MainTemplate>moyaho</MainTemplate>
    </>
  );
};

export default Main;
