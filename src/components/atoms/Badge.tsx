import styled from '@emotion/styled';
import { GRAY } from 'styles/colors';

const Badge = styled.div`
  width: fit-content;
  border-radius: 30px;
  padding: 6px 27px;
  font-size: 14px;
  font-weight: bold;
  color: ${GRAY[1]};
  background: rgba(0, 86, 255, 0.1); ;
`;

export default Badge;
