import { css } from '@emotion/react';
import React from 'react';

interface ModalProps {
  padding?: string;
  closeButton?: React.ReactNode;
  children: React.ReactNode;
}

const Modal = ({ padding = '30px', closeButton, children }: ModalProps) => {
  return (
    <div
      css={css`
        display: flex;
        margin: auto;
        background-color: white;
        border-radius: 20px;
        padding: ${padding};
      `}
    >
      {closeButton}
      {children}
    </div>
  );
};

export default Modal;
