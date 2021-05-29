import { ReactNode, useCallback, useState } from 'react';
import Modal from 'components/atoms/Modal';

interface IUseModal {
  handleClosedCallback?: VoidFunction;
  handleOpenedCallback?: VoidFunction;
}

const useModal = ({ handleClosedCallback, handleOpenedCallback }: IUseModal) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const renderModal = (children: ReactNode, closeButton?: ReactNode) => (
    <Modal
      isVisible={isModalVisible}
      onOpened={handleOpenedCallback}
      onClosed={handleClosedCallback}
      closeButton={closeButton}
    >
      {children}
    </Modal>
  );

  return {
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
    renderModal,
  };
};

export default useModal;
