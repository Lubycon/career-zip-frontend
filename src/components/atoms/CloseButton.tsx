import styled from '@emotion/styled';

interface CloseButtonProps {
  width?: string;
  height?: string;
  onClick: VoidFunction;
}

const StyledButton = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = ({ width = '20px', height = '40px', onClick }: CloseButtonProps) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      <img alt="close" src="/public/icons/close.svg" />
    </StyledButton>
  );
};

export default CloseButton;
