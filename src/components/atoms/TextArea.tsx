import styled from '@emotion/styled';
import { GRAY } from 'styles/colors';

const TextArea = styled.textarea`
  margin-top: 5px;
  border: none;
  font-size: 14px;
  color: ${GRAY[1]};
  resize: none;
  outline: none;
  line-height: 1.6;

  :placeholder {
    color: ${GRAY[3]};
  }
`;

export default TextArea;
