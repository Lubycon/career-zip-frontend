import { ReactNode, useCallback, useState } from 'react';
import Modal from 'components/atoms/Modal';

interface IUseModal {
  width?: string;
  padding?: string;
  borderRadius?: string;
  handleClosedCallback?: VoidFunction;
  handleOpenedCallback?: VoidFunction;
}

const useModal = ({
  width,
  padding,
  borderRadius,
  handleClosedCallback,
  handleOpenedCallback,
}: IUseModal) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const renderModal = (children: ReactNode, closeButton?: ReactNode) => (
    <Modal
      width={width}
      padding={padding}
      borderRadius={borderRadius}
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
