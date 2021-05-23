import { Box } from 'rebass';

interface ModalPropsType {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

const Modal = ({ width, height, padding, margin, children }: ModalPropsType) => {
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
