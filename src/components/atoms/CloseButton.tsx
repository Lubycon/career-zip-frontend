import styled from '@emotion/styled';

interface CloseButtonProps {
  onClick: VoidFunction;
}

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
`;

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <img alt="close" src="/public/icons/close.svg" />
    </StyledButton>
  );
};

export default CloseButton;
