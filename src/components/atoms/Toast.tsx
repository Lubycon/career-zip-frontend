import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  top: -70px;
  transition: top 350ms;

  &.show {
    top: 5%;
  }
`;

const ToastContent = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  padding: 22px 0;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(196, 196, 196, 0.4);
`;

export interface ToastProps {
  isVisible?: boolean;
  message: ReactNode;
}

const Toast = ({ isVisible = false, message }: ToastProps) => {
  return (
    <Wrapper className={isVisible ? 'show' : 'toast'}>
      <ToastContent>{message}</ToastContent>
    </Wrapper>
  );
};

export default Toast;
