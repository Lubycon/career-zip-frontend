import { css } from '@emotion/react';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div
      css={css`
        display: flex;
        padding: 120px 160px;
        margin: auto;
        background-color: white;
        border-radius: 20px;
      `}
    >
      {children}
    </div>
  );
};

export default Modal;
