import { Box } from 'rebass';

interface ModalProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

const Modal = ({ width, height, padding, margin, children }: ModalProps) => {
  return (
    <Box
      sx={{
        width,
        height,
        margin,
        padding,
        borderRadius: '20px',
      }}
      backgroundColor="white"
    >
      {children}
    </Box>
  );
};

export default Modal;
