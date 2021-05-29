import React, { useEffect, useState } from 'react';
import SelectJobModal from 'components/organisms/SelectJobModal';
import MainTemplate from 'components/templates/MainTemplate';
import { useSelector } from 'react-redux';
import { selectAccountInfo } from 'slices/account';

const Main = () => {
  const { job } = useSelector(selectAccountInfo);
  const [jobModalVisible, setJobModalVisible] = useState<boolean>();

  useEffect(() => {
    const selectJobNextTime = JSON.parse(localStorage.getItem('selectJobNextTime'));
    if (selectJobNextTime || job) {
      setJobModalVisible(false);
      return;
    }
    setJobModalVisible(true);
  }, []);

  const handleSelectNextTimeButton = () => {
    localStorage.setItem('selectJobNextTime', 'true');
    setJobModalVisible(false);
  };

  return (
    <>
      <SelectJobModal
        visible={jobModalVisible}
        onClickSelectNextTimeButton={handleSelectNextTimeButton}
      />
      <MainTemplate>moyaho</MainTemplate>
    </>
  );
};

export default Main;
