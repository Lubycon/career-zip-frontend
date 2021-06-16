import React, { useEffect } from 'react';
import { Flex } from 'rebass';
import { logger } from '@lubycon/utils';
import useModal from 'hooks/useModal';
import HomeMainSection from 'components/molecules/HomeMainSection';
import HomeShareSection from 'components/molecules/HomeShareSection';
import HomeSubSection from 'components/molecules/HomeSubSection';
import NavigationBar from 'components/molecules/NavigationBar';
import LandingPageFooter from 'components/organisms/LandingPageFooter';
import CloseButton from 'components/atoms/CloseButton';
import MobileDeviceModalContent from 'components/organisms/MobileDeviceModalContent';

const landingPageLogger = logger.getPageLogger('landing_page');

const Home = () => {
  const { userAgent } = navigator;
  const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(userAgent);
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '280px',
    padding: '14px 16px',
    borderRadius: '10px',
  });

  useEffect(() => {
    landingPageLogger.view();
  }, []);

  useEffect(() => {
    if (isMobile) {
      handleOpenModal();
    }
  }, [isMobile]);

  return (
    <>
      {renderModal(
        <MobileDeviceModalContent />,
        <CloseButton width="15px" height="15px" onClick={handleCloseModal} />
      )}
      <Flex flexDirection="column" minWidth="1440px">
        <NavigationBar />
        <HomeMainSection />
        <HomeSubSection />
        <HomeShareSection />
        <LandingPageFooter />
      </Flex>
    </>
  );
};

export default Home;
