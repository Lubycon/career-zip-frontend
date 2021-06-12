import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Box } from 'rebass';
import Dimmer from './Dimmer';

interface ModalProps {
  isVisible: boolean;
  onOpened?: VoidFunction;
  onClosed?: VoidFunction;
  closeButton?: React.ReactNode;
  children: React.ReactNode;
}

const StyledModal = styled.div`
  width: 950px;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  padding: 30px 40px 50px 40px;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.25);
`;

const Modal = ({ isVisible, onOpened, onClosed, closeButton, children }: ModalProps) => {
  const [defaultScrollStyle, setDefaultScrollStyle] = useState({
    x: '',
    y: '',
  });

  const disableScroll = () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflowX = defaultScrollStyle.x;
    document.body.style.overflowY = defaultScrollStyle.y;
  };

  useEffect(() => {
    setDefaultScrollStyle({
      x: document.body.style.overflowX,
      y: document.body.style.overflowY,
    });

    return () => enableScroll();
  }, []);

  useEffect(() => {
    if (isVisible) {
      onOpened?.();
      disableScroll();
      return;
    }
    onClosed?.();
    enableScroll();
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Dimmer>
          <StyledModal>
            <Box display="flex" justifyContent="flex-end">
              {closeButton}
            </Box>
            {children}
          </StyledModal>
        </Dimmer>
      )}
    </>
  );
};

export default Modal;
