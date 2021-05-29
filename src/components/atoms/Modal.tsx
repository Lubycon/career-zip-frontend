import { css } from '@emotion/react';

interface ModalProps {
  padding?: string;
  closable: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({ padding = '30px', closable, children, onClose }: ModalProps) => {
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
      {closable && (
        <button type="button" onClick={onClose}>
          X
        </button>
      )}
      {children}
    </div>
  );
};

export default Modal;
