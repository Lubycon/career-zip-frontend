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

interface ToastProps {
  isVisible: boolean;
  children: ReactNode;
}

const Toast = ({ isVisible, children }: ToastProps) => (
  <Wrapper className={isVisible ? 'show' : undefined}>
    <ToastContent>{children}</ToastContent>
  </Wrapper>
);

export default Toast;
