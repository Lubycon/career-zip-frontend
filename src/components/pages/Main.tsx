import React, { useEffect } from 'react';
import SelectJobModal from 'components/organisms/SelectJobModal';
import MainTemplate from 'components/templates/MainTemplate';
import { useSelector } from 'react-redux';
import { RootState } from 'slices';
import { getLocalStorageItem, setLocalStorageItem } from 'utils/localstorage';
import { useModal } from 'hooks';

const Main = () => {
  const job = useSelector((state: RootState) => state.account.job);
  const { isModalVisible, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    const selectJobNextTime = getLocalStorageItem<boolean>('selectJobNextTime');
    if (selectJobNextTime || job) {
      handleCloseModal();
      return;
    }
    handleOpenModal();
  }, []);

  const handleSelectNextTimeButton = () => {
    setLocalStorageItem<boolean>('selectJobNextTime', true);
    handleCloseModal();
  };

  return (
    <>
      <SelectJobModal
        isVisible={isModalVisible}
        onClickSelectNextTimeButton={handleSelectNextTimeButton}
      />
      <MainTemplate>moyaho</MainTemplate>
    </>
  );
};

export default Main;
