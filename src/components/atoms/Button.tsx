import styled from '@emotion/styled';
import { BLUE, GRAY } from 'styles/colors';

const Button = styled.button<{ width: string; height: string; margin?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  background-color: ${BLUE[1]};
  color: white;

  :disabled {
    background-color: ${GRAY[3]};
    color: white;
  }
`;

export default Button;
