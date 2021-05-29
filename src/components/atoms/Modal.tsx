import React, { useEffect, useState } from 'react';
import { modal } from 'styles/element';
import Dimmer from './Dimmer';

interface ModalProps {
  isVisible: boolean;
  onOpened?: VoidFunction;
  onClosed?: VoidFunction;
  closeButton?: React.ReactNode;
  children: React.ReactNode;
}

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
          <div css={modal}>
            {closeButton}
            {children}
          </div>
        </Dimmer>
      )}
    </>
  );
};

export default Modal;
